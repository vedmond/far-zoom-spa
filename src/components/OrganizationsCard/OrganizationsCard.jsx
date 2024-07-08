import React, { useState } from 'react';
import {
  CursorEvent,
  Header,
  CardContainer,
  User,
  Title,
  Amount,
  Company,
  INN,
  HiddenContent,
  Tag,
  RegNumber,
} from './style';

export const OrganizationsCard = ({ item }) => {
  const [hover, setHover] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <CardContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <CursorEvent $hover={hover}>
        <Header>
          <Title>
            Проверить данные <br /> клиента
          </Title>
          <HiddenContent $hover={hover}>
            <input type="checkbox" checked={checked} onChange={handleClick} />
          </HiddenContent>
        </Header>
        <Amount>{item.amount} руб.</Amount>
        <Company>{item.company}</Company>
        <INN>{item.inn}</INN>
        <HiddenContent $hover={hover}>
          {item.status.split(',').map((status) => (
            <Tag key={status}>{status}</Tag>
          ))}
          <User>{item.userName}</User>
          <Tag>{item.tag}</Tag>
        </HiddenContent>
        <RegNumber>{`${item.registrationNumber} от ${item.registrationDate}`}</RegNumber>
      </CursorEvent>
    </CardContainer>
  );
};
