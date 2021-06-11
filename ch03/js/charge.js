        var age = prompt("나이를 입력해 주세요.")
        var charge;

        //조건문
        if(age !== null){ //null값 if문
            document.write("입력하신 나이는 " + age + "살 입니다.<br>");
            if(age < 8){
            document.write("미취학 아동입니다.<br>");
            charge = 1000;
        }
        else if(age >= 8 && age < 14){
            document.write("초등학생 입니다.<br>");
            charge = 2000;
        }
        else if(age >= 14 && age < 20){
            document.write("중,고등학생 입니다.<br>");
            charge = 2500;
        }
        else{
            document.write("일반인 입니다.<br>");
            charge = 3000;
        }
        document.write("입장료는 <span class='nonono'>" + charge + "</span>원 입니다.")
    }else{
        document.write("입력이 취소되었습니다.");
    }