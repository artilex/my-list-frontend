import React, { useState }/*, { useEffect }*/ from 'react';
import BookList from './tempComponents/BookList';
import BookView from './tempComponents/organisms/BookView/BookView';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';

const mockData = [
  {
    id: 1,
    title: 'Гарри Поттер и Философский камень',
    authors: [
      {
        id: 1,
        name: 'Джоан Роулинг',
      },
      {
        id: 2,
        name: 'Дж. К. Роулинг',
      }
    ],
    description: "Книга, покорившая мир, эталон литературы для читателей всех возрастов, синоним успеха. Книга, сделавшая Джоан Роулинг самым читаемым писателем современности. Книга, ставшая культовой уже для нескольких поколений. «Гарри Поттер и Философский камень» - история начинается. Одиннадцатилетний мальчик-сирота Гарри Поттер живет в семье своей тетки и даже не подозревает, что он - настоящий волшебник. Но однажды прилетает сова с письмом для него, и жизнь Гарри Поттера изменяется навсегда. Он узнает, что зачислен в Школу Чародейства и Волшебства, выясняет правду о загадочной смерти своих родителей, а в результате ему удается раскрыть секрет философского камня.",
    imageLink: 'https://s1.livelib.ru/boocover/1000833877/o/b3f0/Dzh._K._Rouling__Garri_Potter_i_Filosofskij_kamen.jpeg',
  },
  {
    id: 2,
    title: 'Гарри Поттер и Тайная комната',
    authors: [
      {
        id: 1,
        name: 'Джоан Роулинг',
      },
    ],
    description: 'В Школе чародейства и волшебства «Хогварц» происходят тревожные события. Кто-то нападает на учеников, и преподаватели подозревают, что это таинственное чудовище, которое скрывается в легендарной Тайной комнате. Гарри Поттер и его друзья пытаются разгадать загадку Комнаты секретов, и Гарри снова предстоит сразиться с лордом Вольдемортом. Кто победит на этот раз?',
    imageLink: 'https://s1.livelib.ru/boocover/1000945267/o/d4a3/Dzhoan_Rouling__Garri_Potter_i_Tajnaya_komnata.jpeg',
  },
  {
    id: 3,
    title: 'Гарри Поттер и узник Азкабана',
    authors: [
      {
        id: 1,
        name: 'Джоан Роулинг',
      },
    ],
    description: 'САМОЕ ИНТЕРЕСНОЕ ТОЛЬКО НАЧИНАЕТСЯ! Книга, покорившая мир, эталон литературы для читателей всех возрастов, синоним успеха. Книга, сделавшая Дж.К. Роулинг самым читаемым писателем современности. Книга, ставшая культовой уже для нескольких поколений. Гарри Поттер и узник Азкабана – история продолжается.',
    imageLink: 'https://s1.livelib.ru/boocover/1000975611/o/dbac/Dzhoan_Rouling__Garri_Potter_i_uznik_Azkabana.jpeg',
  },
  {
    id: 4,
    title: 'Гарри Поттер и Кубок Огня',
    authors: [
      {
        id: 1,
        name: 'Джоан Роулинг',
      },
    ],
    description: 'Книга, покорившая мир, эталон литературы для читателей всех возрастов, синоним успеха. Книга, сделавшая Дж.К.Роулинг самым читаемым писателем современности. Книга, ставшая культовой уже для нескольких поколений.',
    imageLink: 'https://s1.livelib.ru/boocover/1001013508/o/fc46/Dzhoan_Rouling__Garri_Potter_i_Kubok_Ognya.jpeg',
  },
  {
    id: 5,
    title: 'Гарри Поттер и Орден Феникса',
    authors: [
      {
        id: 1,
        name: 'Джоан Роулинг',
      },
      {
        id: 2,
        name: 'Дж. К. Роулинг',
      },
      {
        id: 3,
        name: 'Роулинг Дж.К.',
      },
    ],
    description: 'Книга, покорившая мир, эталон литературы для читателей всех возрастов, синоним успеха. Книга, сделавшая Дж.К. Роулинг самым читаемым писателем современности. Книга, ставшая культовой уже для нескольких поколений. «Гарри Поттер и орден Феникса» – история продолжается.',
    imageLink: 'https://s1.livelib.ru/boocover/1001289318/o/e66b/Rouling_Dzh.K.__Garri_Potter_i_Orden_Feniksa.jpeg',
  },
];

const bookForView = {
  id: 1,
  title: 'Гарри Поттер и Философский камень',
  rating: 4,
  isbn: '978-3-16-148410-0',
  description: "Книга, покорившая мир, эталон литературы для читателей всех возрастов, синоним успеха. Книга, сделавшая Джоан Роулинг самым читаемым писателем современности. Книга, ставшая культовой уже для нескольких поколений. «Гарри Поттер и Философский камень» - история начинается. Одиннадцатилетний мальчик-сирота Гарри Поттер живет в семье своей тетки и даже не подозревает, что он - настоящий волшебник. Но однажды прилетает сова с письмом для него, и жизнь Гарри Поттера изменяется навсегда. Он узнает, что зачислен в Школу Чародейства и Волшебства, выясняет правду о загадочной смерти своих родителей, а в результате ему удается раскрыть секрет философского камня.",
  imageLink: 'https://s1.livelib.ru/boocover/1000833877/o/b3f0/Dzh._K._Rouling__Garri_Potter_i_Filosofskij_kamen.jpeg',
  authors: [
    {
      id: 1,
      name: 'Джоан Роулинг',
    },
    {
      id: 2,
      name: 'Дж. К. Роулинг',
    }
  ],
  series: [
    {
      id: 1,
      name: 'Harry Potter',
      orderNumber: 1
    },
    {
      id: 2,
      name: 'Serie 2',
      orderNumber: 9
    }
  ],
  tags: [
    {
      id: 1,
      name: 'Tag 1',
    },
    {
      id: 2,
      name: 'Tag 2',
    },
    {
      id: 3,
      name: 'Tag 3',
    },
    {
      id: 4,
      name: 'Tag 4',
    },
    {
      id: 5,
      name: 'Tag 5',
    }
  ],
};

function App() {
  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '8px',
    border: '1px solid gray',
  };

  return (
    <div style={ wrapperStyle } >
      <div style={{width: '1080px'}}>
        <BookView book={bookForView} />
        <BookList name='Read' books={mockData} isClose={true} />
        <BookList name='Currently Read' books={mockData} isClose={false} />
        <BookList name='Want to Read' books={mockData} isClose={false} />
      </div>
    </div>
  );
}

{
/*import { getMeAction } from './redux/actions/auth';
import { Header } from './components';
import ApiService from './api';
import {
  PublicHomePage,
  HistoryPage,
  AdminHomePage,
  LoginPage
} from './pages';

function App() {
  const { isAuth } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    ApiService.get('/user')
    .then((response) => {
      const {id, email} = response.data;
      dispatch(getMeAction(id, email));
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Router>
      <Header />

      <div className='wrapper'>
        <Switch>
          <Route path='/' exact component={PublicHomePage} />
          <Route path='/history' exact component={HistoryPage} />
          <Route
            path='/login'
            exact
            component={() => <LoginPage isAuth={isAuth} />}
          />

          <Route 
            path='/admin'
            component={() => <AdminHomePage isAuth={isAuth} />}
            isAuth={isAuth}
          />
        </Switch>
      </div>

    </Router>
  );
}
*/

/*
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
*/
}

export default App;
