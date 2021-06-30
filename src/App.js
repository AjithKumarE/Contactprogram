import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonPinIcon from "@material-ui/icons/PersonPin";

const App = () => {
const [value, setValue] = React.useState(0);

const [myList, setMyList] = useState([
	"9514776355",
	"9894422695",
	"8870097788",
  "7708014097",
  "8939240275",
  "8015064849",
  "8778168481",
  "8807621678",
  "8248304993",
  "6383591335",
]);

const handleChange = (event, newValue) => {
	if (newValue == 0) {
	setMyList(["9514776355", "9894422695","8870097788","7708014097","8939240275","8015064849","8778168481","8807621678","8248304993","6383591335"]);
	setValue(0);
	} else {
	setMyList(["Ajith Kumar E", "Gowtham Kumar B", "Bharanitharan T","Lavanya R","Santhosh","Seetharam","Lavanya U","Prakash","Dinesh Kumar B","Venkat"]);
	setValue(1);
	}
};

return (
	<div
	style={{
		marginLeft: "10%",
	}}
	>
	<h2>
		 CONTACT LISTS
	</h2>
	<Paper
		square
		style={{
		flexGrow: 1,
		maxWidth:1000,
		}}
	>
		<Tabs
		value={value}
		onChange={handleChange}
		variant="fullWidth"
		indicatorColor="primary"
		textColor="primary"
		aria-label="icon tabs example"
		>
		<Tab icon={<PhoneIcon />} aria-label="phone" />
		<Tab icon={<PersonPinIcon />} aria-label="person" />
		</Tabs>
		<ul>
		<li>{myList[0]}</li>
		<li>{myList[1]}</li>
		<li>{myList[2]}</li>
    <li>{myList[3]}</li>
    <li>{myList[4]}</li>
    <li>{myList[5]}</li>
    <li>{myList[6]}</li>
    <li>{myList[7]}</li>
    <li>{myList[8]}</li>
    <li>{myList[9]}</li>
		</ul>
	</Paper>
	</div>
);
};

export default App;
