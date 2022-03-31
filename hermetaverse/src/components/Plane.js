const Plane = () => {
    return (
        <mesh position={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[50, 50]}></planeBufferGeometry>
            <meshStandardMaterial color={"#404040"}></meshStandardMaterial>
        </mesh>
    );
}

export default Plane;