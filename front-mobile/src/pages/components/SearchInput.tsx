import React, { useEffect, useState } from 'react';
import {View, TextInput, Modal, ScrollView, TouchableOpacity, Text} from "react-native";
import { theme } from '../../assets/styles';
import { getGenres } from '../../services';


interface SearchProps{    
    setSearch: Function;
    search?: Genres;
}

interface Genres {
    id: number;
    name: string;
}

const SearchInput: React.FC<SearchProps> = ({setSearch, search}) => {
    const [showGenres, setShowGenres] = useState(false);
    const [loading, setLoading] = useState(false);  
    const [genres, setGenres] = useState<Genres[]>([]);

    async function loadGenres() {
        setLoading(true);
        const res = await getGenres();
        setGenres(res.data);
        setLoading(false);
    }

    useEffect(()=>{
        loadGenres();             
    },[]);

    return(
        <View style={theme.inputContainer}>
            <Modal visible={showGenres} animationType="fade" transparent={true} presentationStyle="overFullScreen">
                <View style={theme.modalContainer}>
                    <ScrollView contentContainerStyle={theme.modalContent}>
                        {
                            genres.map(ger => {                                
                                return(
                                <TouchableOpacity style={theme.modlaItem} key={ger.id} onPress={()=>{
                                        setSearch(ger);
                                        setShowGenres(!showGenres);
                                    }}>
                                    <Text style={theme.modlaItemText}>{ger.name}</Text>
                                </TouchableOpacity>
                            )})
                        }
                    </ScrollView>
                </View>
            </Modal>

            <TouchableOpacity onPress={() => setShowGenres(!showGenres)} style={theme.inputSearch}>
                <Text style={theme.inputSearchText}>
                    {search?.name}
                </Text>
            </TouchableOpacity> 
        </View>
    )
}

export default SearchInput;