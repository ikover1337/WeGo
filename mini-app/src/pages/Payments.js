import React from 'react';
import { View, Button, Panel, PanelHeader, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { ReactComponent as Partner1 } from '../img/partner1.svg';
import { ReactComponent as Partner2 } from '../img/partner2.svg';
import { ReactComponent as Partner3 } from '../img/partner3.svg';
import { ReactComponent as Animal1 } from '../img/animal1.svg';
import { ReactComponent as Animal2 } from '../img/animal2.svg';
import { ReactComponent as Anima3 } from '../img/anima3.svg';

class Payments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStory: 'main',
      activePanel: 'panel1',
    };
  }

  goToMascots = () => {
    this.setState({ activePanel: 'mascots' });
  };

  goToPartners = () => {
    this.setState({ activePanel: 'partners' });
  };

  render() {
    return (
      <Epic activeStory={this.state.activeStory}>
        <Tabbar>
          <TabbarItem onClick={() => this.setState({ activePanel: 'panel1' })} selected={this.state.activePanel === 'panel1'}>Назад</TabbarItem>
        </Tabbar>
        <View id="main" activePanel={this.state.activePanel}>
          <Panel id="panel1">
            <PanelHeader>Магазин</PanelHeader>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
              <Button size="l" onClick={this.goToMascots}>Маскоты</Button>
              <Button size="l" onClick={this.goToPartners}>Партнеры</Button>
            </div>
          </Panel>
          <Panel id="mascots">
            <PanelHeader>Магазин</PanelHeader>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <Animal1/>
            <Animal2/>
            <Anima3/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button size="l" onClick={() => this.setState({ activePanel: 'panel1' })}>Назад</Button>
            </div>
          </Panel>
          <Panel id="partners">
            <PanelHeader>Магазин</PanelHeader>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <Partner1 style={{ width: '100px', margin: '10px' }}/>
                <div style={{ marginLeft: '20px' }}>
                  <h3>Магазин "Nike"</h3>
                  <p>Описание</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <Partner2 style={{ width: '100px', margin: '10px' }}/>
                <div style={{ marginLeft: '20px' }}>
                  <h3>Магазин "Puma"</h3>
                  <p>Описание</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Partner3 style={{ width: '100px', margin: '10px' }}/>
                <div style={{ marginLeft: '20px' }}>
                  <h3>Магазин "Adidas"</h3>
                  <p>Описание</p>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button size="l" onClick={() => this.setState({ activePanel: 'panel1' })}>Назад</Button>
            </div>
          </Panel>
        </View>
      </Epic>
    );
  }
}

export default Payments;
