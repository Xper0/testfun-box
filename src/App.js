import React, {Component} from "react";
import "./style.css"
import Content from "./content/Content"

export default class App extends Component{
    constructor(state) {
        super(state);
        this.state = {
            active: false,
            activeHover: false
        }
        //Hover после наведения на упаковку
        this.showHover = (e)=>{
            // работа с DOM  напрямую в React очень плохой пример, со state пока на ВЫ.
            const link = document.querySelectorAll(".infoProduct")
            const pic = document.querySelectorAll(".cat")

            if (link[0] === e) {
                pic[0].style.border = "4px solid #d91667";

            }
            if (link[1] === e ){
                pic[1].style.border = "4px solid #d91667";
            }
            if (link[2] === e ){
                pic[2].style.border = "4px solid #d91667";
            }

        }
        //Показать выбранный товар
        this.onshowselect = (e) =>{
            const link = document.querySelectorAll(".infoProduct")
            const fail = document.querySelectorAll(".footer")
            const pic = document.querySelectorAll(".cat")
            this.state = {
                active: true
            }
            if (link[0] === e ){
                pic[0].src = "./src/content/img/cat-pink.png"
                //this.state = false
            }
            if (link[1] === e){
                pic[1].src = "./src/content/img/cat-pink.png"
                fail[1].innerHTML = "Головы щучьи с чесноком да свежайщая семгушка."
            }
            if (link[2] === e){
                pic[2].src = "./src/content/img/null.png"
                fail[2].innerHTML = "Печалька, с курской закончился."
            }
        }

    }
    render(){

        return (
            <div className="container">

                <Content showSelect = {this.onshowselect}
                         addClass = {this.showHover}

                />
            </div>
        )
    }
}