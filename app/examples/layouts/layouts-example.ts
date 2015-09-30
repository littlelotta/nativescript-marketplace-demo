import observable = require("data/observable");
import gridModule = require("ui/layouts/grid-layout");
import utils = require("utils/utils");
import { Page } from "ui";
import { Color } from "color";

export function rootGridLoaded(args: observable.EventData) {
    var grid = <gridModule.GridLayout>args.object;

    if (grid.android) {
        var compat = <any>android.support.v4.view.ViewCompat;
        if (compat.setElevation) {
            // Fix for the elevation glitch of the tab-view
            compat.setElevation(grid.android, 4 * utils.layout.getDisplayDensity());
        }
    }
}

export function pageLoaded(args: observable.EventData) {
    var page = <Page>args.object;
    var tabView = page.getViewById("tabView");
    if (tabView.ios) {
        tabView.ios.tabBar.barTintColor = new Color("#FF034D8D").ios;
        tabView.ios.tabBar.tintColor = UIColor.whiteColor();
    }
}