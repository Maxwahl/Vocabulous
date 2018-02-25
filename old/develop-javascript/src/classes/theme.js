export default class Theme{
    constructor(id,name, headerBackgroundcolor, menuFontColor,headerFontColor,cardAreaBackgroundColor,menuNavigationColor,menuBackgroundColor,menunNavigationFontColor)
    {
        this.id = id;
        this.name=name;
        this.headerBackgroundcolor = headerBackgroundcolor;
        this.menuFontColor = menuFontColor;
        this.headerFontColor = headerFontColor;
        this.cardAreaBackgroundColor = cardAreaBackgroundColor;
        this.menuNavigationColor = menuNavigationColor;
        this.menuBackgroundColor = menuBackgroundColor;
        this.menunNavigationFontColor = menunNavigationFontColor;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getHeaderBackgroundcolor(){
        return this.headerBackgroundcolor;
    }
    getMenuFontColor(){
        return this.menuFontColor;
    }
    getHeaderFontColor(){
        return this.headerFontColor;
    }
    getCardAreaBackgroundColor(){
        return this.cardAreaBackgroundColor;
    }
    getMenuNavigationColor(){
        return this.menuNavigationColor;
    }
    getMenuBackgroundColor(){
        return this.menuBackgroundColor;
    }
    getMenuNavigationFontColor(){
        return this.menunNavigationFontColor;
    }
}