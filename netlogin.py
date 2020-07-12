from __future__ import division, print_function
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.firefox.options import Options
from selenium.common.exceptions import TimeoutException
from flask import Flask, render_template, request, redirect, Response, url_for, session
import json
import random
import time
import requests
import bs4 as bs
import pandas as pd
from IPython.core.display import display, HTML
display(HTML("<style>.container { width:90% !important; }</style>"))

# usernameStr = 'RA1711003010389'
# passwordStr = 'Netid*5034'

app = Flask(__name__, static_url_path='/static')
# user = ''


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/getData', methods=['POST', 'GET'])
def getData():

    usernameStr = request.form['Email']
    passwordStr = request.form['Password']
    # session['my_var'] = ''+usernameStr

    options = Options()
    options.headless = True
    # browser = webdriver.Firefox(
    # options=options, executable_path=r'E:\New Project\Acadmia\Scrapsrm by Python\geckodriver.exe')
    browser = webdriver.Chrome()
    # browser.implicitly_wait(30)
    browser.get(('https://academia.srmuniv.ac.in/accounts/signin?_sh=false&hideidp=true&portal=10002227248&client_portal=true&servicename=ZohoCreator&service_language=en&serviceurl=https%3A%2F%2Facademia.srmuniv.ac.in%2F'))

    username = browser.find_element_by_id('Email')
    username.clear()
    password = browser.find_element_by_id('Password')
    username.clear()
    username.send_keys(usernameStr)
    password.send_keys(passwordStr)

    browser.find_element_by_xpath("//input[@type = 'button']").click()
    time.sleep(3)
    soup = bs.BeautifulSoup(browser.page_source, features='html.parser')
    course = []

    day = soup.find(id='zc-viewcontainer_WELCOME')
    day_order = day.find_all(class_="highlight")[1].text
    # print(day_order)
    browser.get('https://academia.srmuniv.ac.in/#View:My_Attendance')
    time.sleep(3)

    soup = bs.BeautifulSoup(browser.page_source, features='html.parser')
    tables0 = soup.find(class_="cntdDiv").find_all_next('table')[0]
    table_tr5 = tables0.find_all('tr')[4]
    batch = table_tr5.find_all('td')[4].text
    # print(batch)

    tables1 = soup.find(class_="cntdDiv").find_all_next('table')[1]
    table_tr2 = tables1.find_all('tr')

    for tr in table_tr2:
        td = tr.find_all('td')
        row = [tr.text for tr in td]
        course.append(row)

    # browser.get('https://academia.srmuniv.ac.in')
    browser.get('https://academia.srmuniv.ac.in/#View:My_Time_Table_2019_20_Odd')
    time.sleep(3)
    soup = bs.BeautifulSoup(browser.page_source, features='html.parser')

    slot = []

    tables_slot = soup.find(class_="cntdDiv").find_all_next('table')[1]
    table_s = tables_slot.find_all('tr')

    for tr in table_s:
        td = tr.find_all('td')
        row = [tr.text for tr in td]
        slot.append(row)

    # marks = []

    # tables2 = soup.find(class_="cntdDiv").find_all_next('table')[2]
    # table_trs = tables2.find_all('tr')[2].find_next('td')
    # print(table_trs)
    # td_table = table_trs.find('table').find_next('tr')

    # print(tables2)

    # for tr in td_table:
    #     td = tr.find_all('td')
    #     row = [tr.text for tr in td]
    #     marks.append(row)

    # print(len(marks))

    # df1 = pd.DataFrame(marks[1:23], columns=marks[0])

    df2 = pd.DataFrame({
        "DayOrder": [''+day_order],
        "Batch": [''+batch]
    })
    df = pd.DataFrame(course[1:12], columns=course[0])
    df1 = pd.DataFrame(slot[1:13], columns=slot[0])
    df.columns = ['Course_code','Course_title','Category','Faculty_name','Slot','Room_no','Hours','Absent','Percent']
    df1.columns = ['Course_code','Course_title','Credit','Regn_type','Category','Course_type','Faculty_name','Slot','Room_no']

    time.sleep(1)
    # # print(df)
    # # Export Files to CSV
    # df.to_csv('Data/csv/CS_'+usernameStr+'.csv')
    # df1.to_csv('Data/csv/TT_'+usernameStr+'.csv')
    # df2.to_csv('Data/csv/DO_'+usernameStr+'.csv')

    time.sleep(1)
    # Export Files to JSON
    df.to_json (r'static/Data/json/CS_'+usernameStr+'.json',orient='records')
    df1.to_json (r'static/Data/json/TT_'+usernameStr+'.json', orient='records')
    df2.to_json (r'static/Data/json/DO_'+usernameStr+'.json', orient='records')

    # # print(usernameStr)
    # # screenshot = browser.save_screenshot('snap3.png')
    browser.quit()
    return render_template('nextPage.html', data = usernameStr)


# @app.route('/next_page', methods=['GET', 'POST'])
# def next_page():
#     # user = request.form['Email']
#     # user = request.args.get('user', None)
#     # user = session.get('my_var', None)
#     return render_template("nextPage.html")


if __name__ == "__main__":
    app.run(debug=True)
