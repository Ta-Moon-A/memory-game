import {Injectable} from "@angular/core";
import {shoppingTestDataList} from "./shopping.list.test.data";
import {ListItem} from "./listItem";

@Injectable()
export class ShoppingListService {

    getData() {
        return shoppingTestDataList;
    }

    insertItem(item: ListItem) {
        shoppingTestDataList.push({ name: item.name, amount: item.amount });
    }

    deleteItem(item: ListItem) {
        shoppingTestDataList.splice(shoppingTestDataList.indexOf(item), 1);
    }

}

