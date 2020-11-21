const domContainer = document.querySelector('#like_button_container');
        
const e = React.createElement;
class LikeButton extends React.Component {
constructor(props) {
super(props);
 this.state = { liked: false };
            }
change()
{
console.log("change")
}
click()
{
console.log("click")
}

render() {

return <div>
<label  Class="test">اختر نوع البحث</label>
<select onChange={this.change}>
<option value="https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/2513799b-9d19-40ab-b66d-053d045afb4f/v1/environments/0d630b27-86da-4b56-b899-2945feb51293/collections/d704429d-0d6d-47f1-b090-c1c33786fa74/query?version=2018-12-03&deduplicate=false&highlight=true&passages=true&passages.count=5&highlight=true&natural_language_query="> البحث الشامل عن الاجتهاد القضائي الجزائري </option>

<option value="https://lowapi.herokuapp.com/">الغرفة الجنائية لدى المحكمة العليا</option>
<option value="https://lowapi.herokuapp.com/civ/"> الغرفة المدنية لدى المحكمة العليا</option>
<option value="https://lowapi.herokuapp.com/com/"> الغرفة التجارية والبحرية</option>

</select>


<input id="srt" / >
<button onClick={this.click}>إبحث</button>




</div>
}
}
ReactDOM.render(e(LikeButton), domContainer);
