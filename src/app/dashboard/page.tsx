import FirstPost from './first-post'
import Settings from './settings/settings'

export default function Default(){
    return (
        <div style={{
            color:'red'
        }}>
            <FirstPost />
            <Settings />
        </div>
        // OR Can group with a fragment <> </> (no wrapping trace in browser html tree, unlike <div></div> wrapper)
        // <>
        //     <FirstPost />
        //     <Settings />
        // </>
    );
}