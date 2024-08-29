
import './App.css';

function App() {
  return (
    <div>
      <form>
            <label for="lab_cust_id">Customer ID</label><br/>
            <input type="text" id="inp_cust_id"/><br/><br/>

            <label for="lab_cust_name">Customer Name</label><br/>
            <input type="text" id="inp_cust_name"/><br/><br/>

            <label for="lab_addr_cust">Address</label><br/>
            <textarea id="txtarea_addr" rows="4" cols="50"></textarea><br/><br/>

            <label for="lab_dob">Date of Birth</label><br/>
            <input type="date" id="inp_dob"/><br/><br/>

            <label for="lab_mari_status">If Married or Not</label><br/>
            <label for="lab_yes">Yes</label> &nbsp;
            <input type="radio" id="inp_stat_y" name="inp_stat"/> &ensp; 
            <label for="lab_no">No</label> &nbsp;
            <input type="radio" id="inp_stat_n" name="inp_stat" value="No" checked="checked" /><br/> <br/>

        </form>
    </div>
   
  );
}

export default App;
