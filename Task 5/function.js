// Родительский класс
class Appliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn() {
        console.log(`${this.name} is now plugged in.`);
        this.isPlugged = true;
    }

    unplug() {
        console.log(`${this.name} is now unplugged.`);
        this.isPlugged = false;
    }

    getPowerConsumption() {
        return this.isPlugged ? this.power : 0;
    }
}

// Класс для настольной лампы
class DeskLamp extends Appliance {
    constructor(name, power, color) {
        super(name, power);
        this.color = color;
    }

    changeColor(newColor) {
        this.color = newColor;
        console.log(`${this.name} changed color to ${this.color}`);
    }
}

// Класс для компьютера
class Computer extends Appliance {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    installSoftware(software) {
        console.log(`${software} is being installed on ${this.name}`);
    }
}

// Создание экземпляров
const deskLamp = new DeskLamp("Desk Lamp", 40, "white");
const computer = new Computer("Computer", 300, "Dell");

// Включение приборов в розетку
deskLamp.plugIn();
computer.plugIn();

// Изменение цвета лампы
deskLamp.changeColor("blue");

// Установка программного обеспечения на компьютер
computer.installSoftware("Antivirus");

// Расчет общей потребляемой мощности
const totalPowerConsumption = deskLamp.getPowerConsumption() + computer.getPowerConsumption();
console.log("Total power consumption: " + totalPowerConsumption + "W");

// Отключение приборов от розетки
deskLamp.unplug();
computer.unplug();
