import { IModule, Module, MenuItem } from "../../../../common/models/layout";
import { AuthenticationMode } from "../../../../common/enum";
import route from "./route";
import { Categories } from "../../category/categories";
import { UnitOfMeasurements } from "../../unitOfMeasurement/unitOfMeasurements";

let module: IModule = createModule();
export default module;
function createModule() {
    let module = new Module("app/modules/inventory", "inventoy");
    module.menus.push(
        new MenuItem(
            "Inventory", route.inventory.categories.name, "fa fa-cogs",
            new MenuItem("Categories", route.inventory.categories.name, ""),
            new MenuItem("Unit Measurements", route.inventory.unitOfMeasurements.name, "")
        )
    );
    module.addRoutes([
        { path: route.inventory.categories.path, name: route.inventory.categories.name, component: Categories, data: { authentication: AuthenticationMode.Require } },
        { path: route.inventory.unitOfMeasurements.path, name: route.inventory.unitOfMeasurements.name, component: UnitOfMeasurements, data: { authentication: AuthenticationMode.Require } }
    ]);
    return module;
}