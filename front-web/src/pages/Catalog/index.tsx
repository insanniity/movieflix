import { useState } from 'react';
import Pagination from '../../core/components/pagination'
import Card from './Card'
import './styles.scss'

const Catalog = () => {
    const [activePage, setActivePage] = useState(0);
    
    return (
        <>            
            <div className="row d-flex justify-content-center px-lg-5 px-md-0">
                <div className="col-lg-12  px-lg-0">
                    <div className="card bg-secondary bd-radius-10 box-shadow">
                        <div className="card-body py-1">
                            <div className="input-group">
                                <select className="custom-select default-select bg-secondary text-light col-xl-2 col-lg-4">
                                    <option selected>Categoria</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row movie-container d-flex justify-content-start px-lg-4 px-md-0">                
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card /> 
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />                 
            </div>
            <div className="row d-flex justify-content-start-center">
                <div className="col-xl-12">
                    <Pagination totalPages={10} activePage={5} onChange={page => setActivePage(1)}/>
                </div>
            </div>
        </>
        
    )
}

export default Catalog;