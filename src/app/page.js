import Image from 'next/image';;
import 'bootstrap/dist/css/bootstrap.css';
import Todo from './components/Todo';
import anfIcon from './anficon.png';

export default function Home() {
  return (
    <main className="mx-auto pt-3" style={{'max-width': '800px'}}>
      <div className="card mw-100">
        <div className="card-header p-3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <Image src={anfIcon} height={50} alt="A"/>
                <h5 className="m-0 ps-2">Azure NetApp Files Performance Calculator</h5>
            </div>
            <div>
              <div className="input-group">
              <select input className="form-select">
                              <option value="Central US">Central US</option>
                              <option value="East US" selected>East US</option>
                              <option value="East US 2">East US 2</option>
                              <option value="North Central US">North Central US</option>
                              <option value="South Central US">South Central US</option>
                              <option value="West US">West US</option>
                              <option value="West US 2">West US 2</option>
                              <option value="West US 3">West US 3</option>
                              <option value="US Gov Arizona">US Gov Arizona</option>
                              <option value="US Gov Virginia">US Gov Virginia</option>
                              <option value="US Gov Texas">US Gov Texas</option>
                              <option value="UK South">UK South</option>
                              <option value="UK West">UK West</option>

                              <option value="UAE Central">UAE Central</option>
                              <option value="UAE North">UAE North</option>

                              <option value="Switzerland North">Switzerland North</option>
                              <option value="Switzerland West">Switzerland West</option>

                              <option value="Sweden Central">Sweden Central</option>

                              <option value="Qatar Central">Qatar Central</option>

                              <option value="Norway East">Norway East</option>
                              <option value="Norway West">Norway West</option>

                              <option value="Korea Central">Korea Central</option>

                              <option value="Japan East">Japan East</option>
                              <option value="Japan West">Japan West</option>

                              <option value="Central India">Central India</option>
                              <option value="South India">South India</option>

                              <option value="Germany North">Germany North</option>
                              <option value="Germany West Central">Germany West Central</option>

                              <option value="France Central">France Central</option>

                              <option value="North Europe">North Europe</option>
                              <option value="West Europe">West Europe</option>

                              <option value="Canada Central">Canada Central</option>
                              <option value="Canada East">Canada East</option>

                              <option value="Brazil South">Brazil South</option>

                              <option value="Australia Central">Australia Central</option>
                              <option value="Australia Central 2">Australia Central 2</option>
                              <option value="Australia East">Australia East</option>
                              <option value="Australia Southeast">Australia Southeast</option>
                              
                              <option value="East Asia">East Asia</option>
                              <option value="Southeast Asia">Southeast Asia</option>
                              <option value="South Africa North">South Africa North</option>
              </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <small id="volumeWarning" className="form-text text-muted">Minimum volume size is 100 GiB. Maximum volume size is 500 TiB.</small>
          <div className="input-group mb-3">
            <span className="my-1 input-group-text">Volume Size</span>
            <input type="text" className="my-1 mr-sm-1 form-control" placeholder="" value="10" aria-label="Volume Size" aria-describedby="Volume Size" id="capinput" />
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
            <label className="my-1 btn btn-outline-primary" for="btnradio1">GiB</label>
            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
            <label className="my-1 btn btn-outline-primary" for="btnradio2">TiB</label>
          </div>
        </div>
        <div className="card-footer">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="float-end">
            <small className="text-muted">&copy;Copyright 2023, <a href="https://netapp.com">NetApp</a></small>
      </div>
    </main>
  )
}
