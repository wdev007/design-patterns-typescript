import { BicycleFactory } from "./factories/BicycleFactory";
import { CarFactory } from "./factories/CarFactory";

const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();
const customers = [
  {
    name: "Maria",
    vehicle: carFactory.getVehicle("Fusca"),
  },
  {
    name: "Tonha",
    vehicle: carFactory.getVehicle("Gol quadrado"),
  },
  {
    name: "José",
    vehicle: bicycleFactory.getVehicle("Monark Vermelha"),
  },
];

customers.forEach((customer) => {
  customer.vehicle.pickUp(customer.name);
  customer.vehicle.stop();
});
