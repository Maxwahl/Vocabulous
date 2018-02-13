export default class Theme{
    constructor(name, headerBackgroundcolor, menuFontColor,headerFontColor,cardAreaBackgroundColor,menuNavigationColor,menuBackgroundColor,menunNavigationFontColor)
    {
        this.name=name;
        this.headerBackgroundcolor = headerBackgroundcolor;
        this.menuFontColor = menuFontColor;
        this.headerFontColor = headerFontColor;
        this.cardAreaBackgroundColor = cardAreaBackgroundColor;
        this.menuNavigationColor = menuNavigationColor;
        this.menuBackgroundColor = menuBackgroundColor;
        this.menunNavigationFontColor = menunNavigationFontColor;
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