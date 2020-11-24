export default function Button () {
  const [state, setState] = useState(0)
  
  return <>
    { state }
    <button onClick={() => setState(state + 1)}>
      Increase
    </button>
  </>
}