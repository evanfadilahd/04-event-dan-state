## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720167|
| Nama |  Evan Fadhilah Dzulfikar |
| Kelas | TI - 3I |


### Practicum 1

![Screenshot](assets-report/01.png)

<br />

### Practicum 2

"Try checking in the browser and see what happens?"
![Screenshot](assets-report/02.png)

"Explain why it is like that?"

    We can see that the button name and the message contents is filled in the page.tsx.
    It is like that because the button is having parameters and taking it from the page.tsx

<br />

### Practicum 3

![Screenshot](assets-report/03.png)

<br />

### Practicum 4

![Screenshot](assets-report/04.png)

"Question"
"If we press the "Next Article" button 5x (or exceed the total number of article pages), what will happen?"
![Screenshot](assets-report/04.1.png)
    It become error because the server couldn't find the next index

"Modify gallery.tsx to handle this problem."
![Screenshot](assets-report/04.2.png)

"Add a "Previous Article" button, to display articles backwards."
![Screenshot](assets-report/04.4.png)
![Screenshot](assets-report/04.3.png)


### Practicum 5

## Step 1

![Screenshot](assets-report/05.png)

    When we input a wrong answer for the animal, it will display message in the below of submit button.
    If we input the correct answer, nothing happened


## Step 2

![Screenshot](assets-report/05.1.png)

"What is the difference between the first Form_2 function and the second?"

    In the first form, there are State for fullName and handler for fullName when we change the First & Last Name
    In the second form, there are no State and Handler. It is changed into normal variable.

"Why is it necessary to delete the fullName state? What are the advantages?"

    Because it is make a redundant state, if we not change it, it will make a bug in the application. 
    The advantages is the application use less computing and become bug-free.

<br />

### Practicum 6

## Step 1

![Screenshot](assets-report/06.png)

    There is Panel that we can click and shows text.
    If we click About the information about Almaty is displayed, and other way around.
    But it only shows one of them.


## Step 2

![Screenshot](assets-report/06.1.png)
![Screenshot](assets-report/06.2.png)

"What is the purpose of writing key={to.email} on < Chat key={to.email} contact={to} / > ?"

    To setting again the state, by telling react that if there are different receiver, it becomes a diferrent chat component that needs to create again from the start with data.

"What is the function of the props key?"

    To give direction to setting again the state, the key is the for differentiate receiver in the chat features.