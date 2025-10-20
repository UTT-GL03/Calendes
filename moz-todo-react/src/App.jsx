import './App.css'

function App() {
  return (
    <>
      <h1>Calendes</h1>
      <div className='screen'>
        <div className="Week">
          <h1>week</h1>
          <table>
            <thead>
              <tr>
                <th scope="col" className='hours'></th>
                <th scope="col" className='day'>Monday</th>
                <th scope="col" className='day'>Tuesday</th>
                <th scope="col" className='day'>Wednesday</th>
                <th scope="col" className='day'>Thursday</th>
                <th scope="col" className='day'>Friday</th>
                <th scope="col" className='day'>Saturday</th>
                <th scope="col" className='day'>Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0:00</td>
              </tr>
              <tr>
                <td>2:00</td>
              </tr>
              <tr>
                <td>4:00</td>
              </tr>
              <tr>
                <td>6:00</td>
              </tr>
              <tr>  
                <td>8:00</td>
                <td>HTML tables</td>

              </tr>
              <tr>
                <td>10:00</td>
              </tr>
              <tr>
                <td>12:00</td>
              </tr>
              <tr>
                <td>14:00</td>
              </tr>
              <tr>
                <td>16:00</td>
              </tr>
              <tr>
                <td>18:00</td>
              </tr>
              <tr>
                <td>20:00</td>
              </tr>
              <tr>
                <td>22:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='event'>
          <h2>Event</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
            <br />
            <label>
              Date:
              <input type="date" name="date" />
            </label>
            <br />
            <br />
            <label>
              Hour:
              <input type="time" name="hour" />
            </label>
            <label>
              Duration:
              <input type="time" name="duration" />
            </label>
            <br />
            <br />
            <label>
              Recurring
              <input type="checkbox" name="recurring" />
            </label>
            <br />
            <br />
            
            <label>
              Place :
              <input type="text" name="place" />
            </label>
            <br />
            <br />
            
            <label>
              Description:
              <textarea name="description" />
            </label>
            <input type="submit" value="Submit" />
            
          </form>
        </div>
      </div>
      <div>
        <h2>coming</h2>
        <ol>
          <li> <div>event 1 </div></li>
          <li> <div>event 2 </div></li>
          <li> <div>event 3 </div></li>
          
        </ol>
        <br />
        <br />
        <br />
     </div>
    </>
  )
}

export default App
