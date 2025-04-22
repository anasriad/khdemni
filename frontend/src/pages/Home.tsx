import Header from "../components/Header";
import { motion } from 'framer-motion'
export default function Home() {
    return <>
        <div>
            <div>
                <Header />
            </div>
            <div>
                <motion.div>
                    <img src="../assets/Background.png" className="" />
                </motion.div>
                <motion.div>
                    
                </motion.div>
            </div>
        </div>
    </>
}