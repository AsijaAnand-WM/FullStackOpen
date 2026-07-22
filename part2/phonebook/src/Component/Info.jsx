const Info = ({data, name, search}) => {
    let content = {
        data: '',
        color: ''
    }

    if(data === '' && search === ''){
        content = {
            data: `...`,
            color: '#afe2e3'
        }
    }
    else if(data === 'add'){
        content = {
            data: `Added ${name}`,
            color: 'lightgreen'
        }
    }
    else if(data === 'del'){
        content = {
            data: `Deleted ${name}`,
            color: '#d48d7d'
        }
    }
    else if(data === 'mod'){
        content = {
            data: `Modified ${name}`,
            color: 'grey'
        }
    }
    else if(data === '' && search !== ''){
            content = {
                data: `Filtering`,
                color: 'greenyellow'
            }
    }
    else{
            content = {
                data: `Error... ${name}`,
                color: 'orangered'
            }
    }
    return (
        <div>
            <p
                style={{
                    position: 'fixed',
                    bottom: '0',
                    margin: '0',
                    width: '100vw',
                    textAlign: 'center',
                    backgroundColor: content.color,
                    padding: '10px 20px',
                }}>
                {content.data}
            </p>
        </div>
    )
}

export default Info
