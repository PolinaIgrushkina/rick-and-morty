import css from './CharactersPage.module.css';
import CharactersList from 'components/CharactersList/CharactersList';
import Logo from 'components/Logo/Logo';
import SearchBar from 'components/SearchBar/SearchBar';

export default function CharactersPage() {
  return (
    <div className={css.page}>
      <Logo />
      <SearchBar />
      <CharactersList />
    </div>
  );
}
