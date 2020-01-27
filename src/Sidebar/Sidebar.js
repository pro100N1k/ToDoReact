import React from "react";
import './Sidebar.scss';

let mas = [
    {
        id: 1,
        img:  'https://pbs.twimg.com/profile_images/930967233479655424/tYq-2FNL_400x400.jpg',
        title:'First title',
        text: 'First description text block to see how will text looks like',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        img:  'https://pbs.twimg.com/profile_images/930967233479655424/tYq-2FNL_400x400.jpg',
        title:'Second title',
        text: 'Second description text block to see how will text looks like',
        link: 'https://www.google.com'
    },
    {
        id: 3,
        img:  'https://pbs.twimg.com/profile_images/930967233479655424/tYq-2FNL_400x400.jpg',
        title:'Third title',
        text: 'Third description text block to see how will text looks like',
        link: 'https://www.google.com'
    }
];

class Sidebar extends  React.Component {
    constructor(props) {
        super(props);
        this.state = { data: mas}
    }

    render() {
        return (
            <div className="sidebar">
                {this.state.data.map( item => (
                    <div key={item.id} className="sidebar__item">

                        <div className="sidebar__img-wrapper">
                            <img src={item.img} alt="" className="sidebar__img"/>
                        </div>

                        <div className="sidebar__info">
                            <div className="sidebar__title">{item.title}</div>
                            <div className="sidebar__text">{item.text}</div>
                            <a href={item.link} className="sidebar__link">Link</a>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Sidebar;