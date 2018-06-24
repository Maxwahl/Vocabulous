export default class Theme{
    constructor(id,name, headerBackgroundcolor, menuFontColor,headerFontColor,cardAreaBackgroundColor,menuNavigationColor,menuBackgroundColor,menuNavigationFontColor, cardBackgroundColor, cardHeadLineColor, paragraphFontColor)
    {
        this.id = id;
        this.name=name;
        this.headerBackgroundcolor = headerBackgroundcolor;
        this.menuFontColor = menuFontColor;
        this.headerFontColor = headerFontColor;
        this.cardAreaBackgroundColor = cardAreaBackgroundColor;
        this.menuNavigationColor = menuNavigationColor;
        this.menuBackgroundColor = menuBackgroundColor;
        this.menuNavigationFontColor = menuNavigationFontColor;
        this.cardBackgroundColor = cardBackgroundColor;
        this.cardHeadLineColor = cardHeadLineColor;
        this.paragraphFontColor = paragraphFontColor;
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
        return this.menuNavigationFontColor;
    }
    getCardBackgroundColor(){
        return this.cardBackgroundColor;
    }
    getCardHeadLineColor(){
        return this.cardHeadLineColor;
    }
    getParagraphFontColor(){
        return this.paragraphFontColor;
    }
    getHeaderBackgroundcolorDB(){
        return this.headerBackgroundcolor.substr(1);
    }
    getMenuFontColorDB(){
        return this.menuFontColor.substr(1);
    }
    getHeaderFontColorDB(){
        return this.headerFontColor.substr(1);
    }
    getCardAreaBackgroundColorDB(){
        return this.cardAreaBackgroundColor.substr(1);
    }
    getMenuNavigationColorDB(){
        return this.menuNavigationColor.substr(1);
    }
    getMenuBackgroundColorDB(){
        return this.menuBackgroundColor.substr(1);
    }
    getMenuNavigationFontColorDB(){
        return this.menuNavigationFontColor.substr(1);
    }
    getCardBackgroundColorDB(){
        return this.cardBackgroundColor.substr(1);
    }
    getCardHeadLineColorDB(){
        return this.cardHeadLineColor.substr(1);
    }
    getParagraphFontColorDB(){
        return this.paragraphFontColor.substr(1);
    }
}