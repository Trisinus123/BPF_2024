import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    tambahCounter,
    kurangCounter
} from '../redux/counter/naikTurunSlice';
export default function CounterNaikTurun() {
    // kita pilih reducer counter yang telah di daftarkan pada store. js
    const {
        totalCounter
    } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    function tombolTambah() { // handle untuk tombol counter tambah
        dispatch(tambahCounter())
    }

    function tombolKurang() { // handle untuk tonbol counter kurang
        if (totalCounter > 0) {
            dispatch(kurangCounter())
        } else {
            alert('minimal 0')
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card-header">Total Skor Saya</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1 mt-2">Jumlah : </div>
                                <div className="col-2">
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-danger" onClick={()=> tombolKurang()}> - </button>
                                        <span className="form-control text-center">{totalCounter}</span>
                                        <button className="btn btn-outline-info" type="button" onClick={()=> tombolTambah()}>
                                            + </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

