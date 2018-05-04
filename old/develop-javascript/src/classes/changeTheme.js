import Theme from './theme.js';
import BackEndHandler from './backEndHandler.js';
export default class ChangeTheme{

    static LightenDarkenColor(col, amt) {
    
        var usePound = false;
    
        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }
    
        var num = parseInt(col,16);
    
        var r = (num >> 16) + amt;
    
        if (r > 255) r = 255;
        else if  (r < 0) r = 0;
    
        var b = ((num >> 8) & 0x00FF) + amt;
    
        if (b > 255) b = 255;
        else if  (b < 0) b = 0;
    
        var g = (num & 0x0000FF) + amt;
    
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
    
        return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
    
    }
    static changeTheme(theme){
        var myapp = document.querySelector("my-app");
        var sharedStyle = myapp._getSharedStyle();
        console.dir(sharedStyle);
        var overview = myapp._getOverviewpage();
        var darkTheme = new Theme(0, "Dark Theme","#2E2E2E","#FFFFFF","#FFFFFF","#585858","#6E6E6E","#424242","#FFFFFF", "#424242","#ffffff","#E0ECF8");
        var defaultTheme = new Theme(1, "Default Theme","#1E88E5","#000000","#FFFFFF","#eeeeee","#f2f2f2","#ffffff","#000000","#FFFFFF","#212121","#A4A4A4");
        var user;
        var register = myapp._getRegisterLogin();
        var username = register._getUsername();
        var password = register._getPassword();
        var ironPages = overview._getIronPages();

        var appheader = overview._getAppHeader();
        var ironSelector = overview._getIronSelector();
        var appdrawerLayout = overview._getAppdrawer();
        var appdrawer = overview._getAppdrawerForTheme();
        var isDefault = true;
        overview.updateStyles({"--app-primary-color":theme.getHeaderBackgroundcolor()});
        overview.updateStyles({"--app-secondary-color":theme.getMenuFontColor()});
        overview.updateStyles({"color":theme.getMenuFontColor()});
        overview.updateStyles({"--itemcolor":theme.getMenuFontColor()});
        overview.updateStyles({"--containercolor":theme.getMenuBackgroundColor()});
        appheader.updateStyles({"color":theme.getHeaderFontColor()});
        appdrawerLayout.updateStyles({"background-color":theme.getCardAreaBackgroundColor()});
        overview.updateStyles({"--navigationcolorbackground":theme.getMenuNavigationColor()});
        overview.updateStyles({"--navigationcolorfont":theme.getMenuNavigationFontColor()});
        myapp.updateStyles({"--cardBackgroundcolor":theme.getCardBackgroundColor()});
        myapp.updateStyles({"--headlineCard":theme.getCardHeadLineColor()});
        myapp.updateStyles({"--cardFontColor":"--headlineCard"});
        myapp.updateStyles({"--secondaryFontColorCard":theme.getParagraphFontColor()});
        var amt = -10;
        var color = ChangeTheme.LightenDarkenColor(theme.getCardBackgroundColor(), amt);
        myapp.updateStyles({"--hover-color":color});
        console.log(appdrawer);
    }
}