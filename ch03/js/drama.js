        //나이가 15세 이상이면 '관람가능' 아니면 '관람불가' 출력
        //var age = 11;
        var age = prompt("나이를 입력해 주세요", "입력란")
    if(age !== null){
        if(age >= 15){ //비교문이 true이면 실행함
            document.write("관람 가능<br>");
        }
        else{ // (age < 15) 생략됨
            document.write("관람 불가<br>");
        }
        document.write("나이는 " + age + "세 입니다.");
    }else{
        document.write("입력이 취소 되었습니다.");
    }