import { ICharacterDto } from '../../character/dto/character.dto';

export interface ICollectionDto {
  id: number;
  nb: number;
  character?: ICharacterDto;
  star: number;
  power: number;
}
