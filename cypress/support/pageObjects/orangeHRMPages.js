export var loginpage = {
    input: {
        username: 'input[name=txtUsername]',
        password: 'input[name=txtPassword]'
    },
    button: {
        loginButton: 'input[value=LOGIN]'
    }
}

export var homepage = {
    links:{
        subscriber: '#Subscriber_link'
    }

}

export var assignleave = {
    input: {
        employeename: 'input[name="assignleave[txtEmployee][empName]"]',
    },
    button: {
        loginButton: 'input[value=LOGIN]',
        assign: '#assignBtn'
    },
    select: {
        leavetype: 'select[name="assignleave[txtLeaveType]"]'
    },
    links:{
        viewdetails: '#leaveBalance_details_link'
    },
    datePicker:{
        fromdate:'#assignleave_txtFromDate',
        todate:'#assignleave_txtToDate'
    }

}

