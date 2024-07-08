import React, { useState } from 'react';
import styled from 'styled-components';
import { useGetOrganizationListQuery } from '../../repository/api';
import { OrganizationsCard } from '../OrganizationsCard';
import { Loader } from '../Loader';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 20px;
  gap: 30px;
`;

const Notification = styled.div`
  margin-top: 80px;
  margin-left: 20px;
  color: black;
  font-size: x-large;
`;

const Paginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  padding: 0 2rem;
  gap: 20px;

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #7a7a7a;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const OrganizationCardList = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });

  const query = useSelector((state) => state.query);
  const { data, isError, isLoading } = useGetOrganizationListQuery({
    page: pagination.page,
    limit: pagination.pageSize,
    userName: query.name || '',
    registrationNumber: query.number || '',
  });

  const handlePageClick = (event) => {
    setPagination(prevPagination => ({ ...prevPagination, page: event.selected + 1 }));
  };

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (isError) {
    return <Notification>Ничего не найдено. Попробуйте изменить параметры запроса.</Notification>;
  }

  return (
    <>
      <Container>
        {data.map((item) => (
          <OrganizationsCard key={item.id} item={item} />
        ))}
      </Container>
      {query.name || query.number ? null : (
        <Paginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageCount={3} // количество страниц захарткожено так как мок-сервис не умеет возвращать общее количество найденных элементов
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
};
