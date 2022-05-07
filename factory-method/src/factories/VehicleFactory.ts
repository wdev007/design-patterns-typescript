import { IVehicle } from "../interfaces";

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): IVehicle;

  pickUp(customerName: string, vehicleName: string): IVehicle {
    const car = this.getVehicle(vehicleName);

    car.pickUp(customerName);

    return car;
  }
}
