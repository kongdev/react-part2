import React, {Component} from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
            'str' : '',
            'data': [],
          
        };
        this.handlerSearch = this
            .handlerSearch
            .bind(this);
    }

    componentDidMount() {
        //console.log('zxzxzx')
        this.setState({
            data: [
                {
                    name: "kong01"
                }, {
                    name: "kong02"
                }, {
                    name: "kong03"
                }, {
                    name: "test01"
                }, {
                    name: "test02"
                }, {
                    name: "test03"
                }
            ]
        });

    }

    handlerSearch(event) {
        //console.log(event.target.value)
        this.setState({
            'str' : event.target.value
        });
    }

    searchFilter(str){
        return (x)=>{
            return x.name.toLowerCase().includes(str.toLowerCase()) || !str
        }
    }

    render() {

        const {
            data,
            str
        } = this.state
       
        return (
            <div className="App">
                <form>
                    <input type="text" id="search" onChange={this.handlerSearch}/>
                </form>
                <ul>
                    {
                        data.filter(this.searchFilter(str)).map((obj,index)=>{
                            //console.log(obj)
                            return <li key={index}>{obj.name}</li>
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}

export default Search;