// advantages switch statement 
/* 
1. Faster Execution
2. it is more readable
3. Easy to edit.

Limitation : 
1. switch statement can only evaluate integer or character types.
2. switch statement does not allow the use of logical expressions.
*/

// if else 

if (month == 'January' || month == 'March' || month == 'May' || month == 'July' || month == 'August' || month == 'October' || month == 'December') {
    cout << '31';
} else if (month == 'February') {
    cout << '28 or 29';
} else {
    cout << '30';
}


// switch statement 

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        cout << "31";
        break;
    case 2:
        cout << "28 or 29";
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        cout << "30";
        break;
    default:
        cout << "Not a valid month!"; 
        break
}


