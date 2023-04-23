class Apple {
    constructor(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    isEmpty() {
        if (this.weight <= 0 ) {
            return true;
        }else {
            return false;
        }
    }
    decreaseApple() {
        if (this.isEmpty()) {
            alert("Táo ăn hết rồi")
        }else {
            this.weight--;
        }
    }
}


class Human {
    constructor(nam,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        return this.name;
    }
    getWeight() {
        return this.weight
    }
    isMale() {
        if (this.gender == 1) {
            return true;
        }else {
            return false;
        }
    }
    getGender() {
        if (this.isMale()) {
            return "Male";
        }else {
            return "Famale";
        }
    }
    setWeight(weight) {
        this.weight = weight;
    }
    say(string) {
        console.log(string);
    }
    checkApple(apple) {
        return apple.isEmpty();
    }
    eat(apple) {
        if (apple.getWeight() > 0) {
            apple.decreaseApple();
            this.weight++;
        }else {
            alert("Táo đã ăn hết.");
        }
    }
    getInfo(human) {
        alert(human.name + " " +human.weight + " " +human.getGender());
    }
}

let adam = new Human("adam",1,65);
let eva = new Human("eva",2,55);
let apple_1 = new Apple(10);

//adam.checkApple(apple_1)
adam.say("I am Adam" + "<br>");
eva.say("I am Eva" + "<br>");

while (apple_1.isEmpty() !== true) {
    document.write("Adam ăn táo" + "<br>");
    adam.eat(apple_1);

    document.write(" Quả táo còn : " + "<br>");
    document.write(apple_1.getWeight() + " đơn vị" + "<br>")
    document.write("Cân nặng của Adam là : " + adam.getWeight() + " đơn vị " + "<br>");

    document.write("<br>")

    document.write("Eva ăn táo " + "<br>");
    eva.eat(apple_1);

    document.write("Quả táo còn : " + "<br>");
    document.write(apple_1.getWeight() + " đơn vị " + "<br>");
    document.write( "Cân nặng là : " + eva.getGender() + " đơn vị" + "<br>");
}