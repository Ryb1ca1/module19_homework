// Родительская функция
function Appliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

Appliance.prototype.plugIn = function() {
    console.log(this.name + " is now plugged in.");
    this.isPlugged = true;
};

Appliance.prototype.unplug = function() {
    console.log(this.name + " is now unplugged.");
    this.isPlugged = false;
};

Appliance.prototype.getPowerConsumption = function() {
    return this.isPlugged ? this.power : 0;
};

// Функция-конструктор для настольной лампы
function DeskLamp(name, power, color) {
    Appliance.call(this, name, power);
    this.color = color;
}

DeskLamp.prototype = Object.create(Appliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

DeskLamp.prototype.changeColor = function(newColor) {
    this.color = newColor;
    console.log(this.name + " changed color to " + this.color);
};

// Функция-конструктор для компьютера
function Computer(name, power, brand) {
    Appliance.call(this, name, power);
    this.brand = brand;
}

Computer.prototype = Object.create(Appliance.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.installSoftware = function(software) {
    console.log(software + " is being installed on " + this.name);
};

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
