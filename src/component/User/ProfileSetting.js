import { Link } from "react-router-dom";
import Sidebar from './Sidebar';

function ProfileSetting(){
    return(
         <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Profile Setting</h5>
                        <div className="card-body">
                        <div className="mb-3 row">
                             <label for="staticEmail" className="col-sm-2 col-form-label">FULL Name</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="staticEmail" />
                                </div>
                        </div>
                          <div className="mb-3 row">
                             <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="staticEmail" />
                         </div>
                     </div>
                     <div className="mb-3 row">
                             <label for="staticEmail" className="col-sm-2 col-form-label">Profile Phpto</label>
                                <div className="col-sm-10">
                                <input type="file" className="form-control" id="staticEmail" />
                         </div>
                     </div>
                     <div className="mb-3 row">
                     <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                       <div className="col-sm-10">
                         <input type="password" className="form-control" id="inputPassword"/>
                       </div>
                </div>
                <div className="mb-3 row">
                     <label for="inputPassword" className="col-sm-2 col-form-label">Interest</label>
                       <div className="col-sm-10">
                         <input type="text" className="form-control" id="inputPassword"/>
                       </div>
                </div>
                <hr/>
                    <button className="btn btn-primary">Update</button>
                
                        </div>
                    </div>
               
                </section>
            </div>
         </div>
    );
}
export default ProfileSetting;