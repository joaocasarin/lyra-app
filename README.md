# Lyra

# This exercise is based on an OOP practice workshop ran in a university, that's why the domain is unrelated :).

## - Context:

A company needs a program to calculate how much to pay their employees.

## - Requirements:

### - REQ-1.

Each employee has some fixed hourly wage.

### - REQ-2

Our labor code requires that employees get paid time and a half for any hours over 40 that they work in a single week. For example, if an employee works 45 hours, they get 5 hours of overtime, at 1.5 times their base pay. The minimum allowed wage is 4 EUR/h. It is illegal for an employee to work more than 60 hours in a week.

### - REQ-3:

Multiple labor codes will have to be supported. For example, a new 2022 labor just came into effect, which increased the minimal hourly wage to 5, and limited max working hours per week to 35. Wages in 2022 have to be calculated using 2022 labor code, while wages for 2021 have to still use the earlier version.

### - REQ-4:

Support for recording work hours on a daily basis (how many hours has an employee worked on a specific day). If they try to record hours that exceed the maximum allowed by the labor code it should not be allowed.

### - REQ-5:

It should be possible to calculate an employee's salary for a calendar month (e.g. calculate salary for last December). This should be based on daily time entries + labor code that is in effect at that time.

## - Tips for implementation:

-   The visual prettiness of the UI does not matter
-   Technologies to use: `React` and `TS`, optionally `MobX` for state management.
-   Backend and persistence are not needed - everything can be stored in transient state (`MobX` store, some singleton object, etc.)
-   One of the main points of this exercise is the design of the business logic - how the code is structured, if it reflects real-world concepts, preserves encapsulation as much as possible, etc.

## Implemented features:

-   [ ]
