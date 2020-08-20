import React from "react"
import "./grid.css"


export default Content => {
    const menu = [{name: "Нямушка", withwhat: "C фуа-гра", kg:  0.5, portion: "10 порциий" , prize: "мышь в подарок"},
        {name: "Нямушка", withwhat:  "С рыбой", kg: 2, portion: "40 порциий" , prize: "2 мыши в подарок"},
        {name: "Нямушка", withwhat:  "С курой", kg: 5, portion: "100 порциий" , prize: " 5 мышей в подарок " +
                "Заказчик доволен" },
    ]
    let boxClass = ["infoProduct"];
    return (


        <div className="content">
            <div className="section">
                <h1>Ты сегодня покормил кота?</h1>
            </div>
            <div className="gridconteiner">
                    {menu.map(item => (<ul  key={item.name + item.kg}>
                            <div className={boxClass.join(" ")}
                                 onMouseOut={(e)=> Content.addClass(e.currentTarget)}
                                 onClick={(e)=> Content.showSelect(e.currentTarget)}>
                                <img className="cat"  src='./src/content/img/cat-blue.png' alt="back"/>
                                <p className="p1">Сказочное заморское яство</p>
                                <li className="name">{item.name}</li>
                                <li className="withwhat">{item.withwhat}</li>
                                <p className="p2">{item.portion}<br/>{item.prize}</p>
                                <li className="kg {new}">{item.kg}<span className="span">кг</span></li>
                                <p className="footer">Чего сидишь? Порадуй котэ,<span onClick={()=>
                                    Content.showSelect(item)}> купи.</span></p>
                            </div>

                        </ul>
                    ))}

            </div>
        </div>
    )
}