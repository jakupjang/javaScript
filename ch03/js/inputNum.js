        // 숫자를 입력받아서 그 숫자까지 출력하는 프로그램
        var n = 1;
        var inputNum = prompt("~까지 출력할 숫자를 입력하세요!");

        if(inputNum !== null){
            while(true){
                document.write(n + "<br>");
                n += 1;
                if(n > inputNum){ //반복 조건문
                break; 
                }
            }
        }else{
            document.write("입력이 취소 되었습니다.");
        }