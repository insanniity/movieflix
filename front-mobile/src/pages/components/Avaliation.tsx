import React, { useState } from 'react';
import { TextInput, View , Alert} from 'react-native';
import { movieDetail } from '../../assets/styles';
import { saveNewReview } from '../../services';
import Button from './Button';

interface AvaliationProps{
    movieId?: number;
    updateReviews: Function;
}

const Avaliation : React.FC<AvaliationProps> = ({movieId, updateReviews}) => {
    const [coment, setComent] = useState({text: "", movieId});
    const blankComent = {text: "", movieId}

    async function handleSave(){
        if(coment.text){
            const res = await saveNewReview(coment);
            updateReviews();
            if(res.data){
                Alert.alert(
                    "Sucesso!",
                    "Seu comentário foi salvo com sucesso!",
                    [                 
                      {text: "OK"}
                    ]
                );
                setComent(blankComent);                
            }else{
                Alert.alert(
                    "Erro!",
                    "Ocorreu um erro ao salvar sua avalizaçao, tente novamente mais tarde!",
                    [                 
                      {text: "OK"}
                    ]
                  );
            }
        }else{
            Alert.alert(
                "Erro!",
                "Você precisa digitar sua avaliaçao!",
                [                 
                  {text: "OK"}
                ]
              );
        }
    }

    return (
        <View style={movieDetail.card}>
            <View style={movieDetail.avaliation}>
                <TextInput 
                    multiline style={movieDetail.txtArea}
                    placeholder="Deixe sua avaliação aqui"
                    autoCapitalize="none" 
                    value={coment.text}
                    onChangeText={
                        (e) =>{ 
                            const newComent = { ...coment};
                            newComent.text = e;
                            setComent(newComent);
                        }
                    }
                />                    
                <Button text="SALVAR AVALIAÇÃO" action={handleSave} icon={false}/>
            </View>
        </View>
    );
}

export default Avaliation;