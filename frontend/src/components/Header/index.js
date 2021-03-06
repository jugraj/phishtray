import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { Route, Switch } from 'react-router-dom';

const SectionHeader = styled('div')({
  display: 'flex',
  flex: 0,
  flexBasis: 280,
  borderTopRightRadius: '5px',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '-1px',
});

const HeaderText = styled('h2')({
  textTransform: 'uppercase',
  color: '#e6e6e6',
  fontSize: 18,
  letterSpacing: '1.4px',
});

export default class Header extends Component {
  render() {
    return (
      <div
        className={css({
          display: 'flex',
          flexDirection: 'row',
          height: 80,
          borderBottom: '1px solid #e6e6e6',
          backgroundColor: '#fff',
        })}
      >
        <div
          className={css({
            height: 80,
            width: 160,
            backgroundColor: '#1D1B1C',
          })}
        />
        <Switch>
          <Route
            path="/inbox"
            render={() => (
              <SectionHeader className={css({ backgroundColor: '#1C8BF4' })}>
                <HeaderText>Inbox</HeaderText>
              </SectionHeader>
            )}
          />
          <Route
            path="/accounts"
            render={() => (
              <SectionHeader className={css({ backgroundColor: '#1969B8' })}>
                <HeaderText>Accounts</HeaderText>
              </SectionHeader>
            )}
          />
          <Route
            path="/files"
            render={() => (
              <SectionHeader className={css({ backgroundColor: '#1C8BF4' })}>
                <HeaderText>Files</HeaderText>
              </SectionHeader>
            )}
          />
        </Switch>
      </div>
    );
  }
}
