import React from 'react'
import { Menu } from 'semantic-ui-react'
class Navbar extends React.Component {
    render(){
        return<Menu pointing secondary>
            <Menu.Item
            name='home'
          />
          <Menu.Item
            name='home2'
          />
        </Menu>
    }
}
export default Navbar