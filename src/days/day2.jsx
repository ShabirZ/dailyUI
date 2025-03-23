import { useState } from "react";

function cardInfo(info) {
    let ans = "";
    let counter = 0;
    for (let i = 0; i < info.length; i++) {
        if(info[i] == ' '){
            continue;
        }
        ans += info[i];
        if ((counter + 1) % 4 === 0 && i !== info.length - 1) {
            ans += ' ';
        }
        counter+=1;
    }
    return ans;
}
function calcExpDate(cardInfo){
    let ans = "";
    let counter = 0;
    for(let i=0; i<cardInfo.length;i++){
        if( (cardInfo[i] == ' ') || (cardInfo[i] == '/') ){
            continue;
        }
        counter+=1;
        ans+=cardInfo[i];
        if(counter ==2){
            ans+= " / ";
        }
        
    }
    return ans;
}

function Day2() {
    //day 0
    //<input type="checkbox" value="bubbles" checked="checked" />
    const [inputCardInfo, setCardInfo] = useState('');
    const [inputExpDate, setExpDate] = useState('');
    return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <div className= " w-2/7 h-2/3 shadow-2xl flex flex-col justify-start p-15 gap-15 rounded-2xl">
            <div className="flex flex-col justify-center gap-1">
                <h1 className="text-3xl font-serif font-extrabold text-sky-700"> Checkout</h1>
                <h4 className="text-gray-400"> Enter payment information</h4>
            </div>
            <div className="flex flex-col gap-4">
                <div className="">
                    <div className="pl-2"> Full Name </div>
                    <input className="Email rounded-2xl border-2 border-blue-900 w-100 h-15 shadow-lg font-normal hover:bg-gray-200 pl-2" placeholder="John Doe"/>
                </div>
                <div className="">
                    <div className="pl-2"> Card Number </div>
                    <input maxlength="19" value={cardInfo(inputCardInfo)} onChange={e => setCardInfo(e.target.value)} className="Email rounded-2xl border-2 border-blue-900 w-100 h-15 shadow-lg font-normal hover:bg-gray-200 pl-2" placeholder="1111 2222 3333 4444"/>
                </div>

                <div className=" h-15 flex gap-4"> 
                    <div>
                        <div className="pl-2 text-sm"> Expiration Date</div>
                        <input maxlength="9"   value={calcExpDate(inputExpDate)} onChange={e => setExpDate(e.target.value)}  className="Email rounded-2xl border-2 border-blue-900 w-48 h-15 shadow-lg font-normal hover:bg-gray-200 pl-2" placeholder="MM/YY"/>
                    </div>

                    <div>
                        <div className="pl-2 text-sm"> CVV</div>
                        <input maxlength="3"   type="password" name="password" className="Email rounded-2xl border-2 border-blue-900 w-48 h-15 shadow-lg font-normal hover:bg-gray-200 pl-2" placeholder="123"/>
                    </div>


                </div>
            </div>
            <div className="flex gap-2">
                <div>Check to keep info</div>
                <input type="checkbox" id="checkbox" className="hidden peer" />
                <label for="checkbox" className="w-6 h-6 bg-white border-2 rounded-md peer-checked:bg-green-500 flex items-center justify-center cursor-pointer">

                <span className="text-white peer-checked:block hidden">✔</span>
                </label>
            </div>
        </div>
    </div>
    );
}

export default Day2;