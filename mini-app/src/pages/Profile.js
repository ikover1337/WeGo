import React from 'react';
import ReactDOM from "react-dom";


import { Div, Link, Panel, PanelHeader, Avatar, SimpleCell, Group, Button, Badge, Icon, Card, CardGrid } from '@vkontakte/vkui';
import { Icon24Article } from '@vkontakte/icons';
import { ReactComponent as Grade } from '../img/Rectangle24.svg';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'all',
    };
  }
  render() {
    const { activeTab } = this.state;
    const renderActivities = () => {

      const activities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

      return (
        <CardGrid size="l" cols={2} style={{ alignItems: 'center' }}>

          {activities.map((activity, index) => (
            <Card key={index} mode="shadow" style={{ width: '100%', maxWidth: '400px' }}>
              <div style={{ height: '200px', background: '#ccc' }} />
            </Card>
          ))}
        </CardGrid>
      );
    };
    return (
      <div>
        <Div style={{ position: 'relative', zIndex: 1 }}>
        <Badge style={{ zIndex: 4, position: 'absolute', top: 190, right: 900 }}>
          <Grade />
          <span style={{ position: 'absolute', top: '300%', left: '90%', color: '#fff', fontWeight: 'bold' }}></span>
        </Badge>
          <Avatar size={155} src="./scr/img/gb.jpg" style={{ position: 'absolute', top: '300%', left: '50%', transform: 'translateX(-50%)'}} />
        </Div>
            <Group style={{ marginTop: 127}}>
              <Panel id={this.props.id}>
                <Div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SimpleCell
                  description="Никнейм"
                  style={{ marginTop: 57 }} 
                  >Ваше имя</SimpleCell>
                </Div>
                <Div>
                  <SimpleCell level="1" weight="regular" before={<Icon24Article />}>Информация обо мне</SimpleCell>
                </Div>
              </Panel>
            </Group>
      
            <Group>
              <Panel>
                <Div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <Button
                    activeEffectDelay={1}
                    mode="secondary"
                    onClick={() => this.setState({ activeTab: 'all' })}
                    className={activeTab === 'all' ? 'Button_active' : ''}
                  >
                  Все активности
                  </Button>
                  <Button
                    activeEffectDelay={1}
                    mode="secondary"
                    style={{ marginLeft: 8 }}
                    onClick={() => this.setState({ activeTab: 'my' })}
                    className={activeTab === 'my' ? 'Button_active' : ''}
                    >
                    Мои активности
                  </Button>
                </Div>
                {activeTab === 'all' && (
                <div>
                  
                </div>
                )}
                {activeTab === 'my' && (
                <div>
                  
                </div>
                )}
              </Panel>
            </Group>
      </div>
  );
}
}
export default Profile;


