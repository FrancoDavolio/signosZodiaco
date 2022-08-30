let fecha = document.querySelector("#fecha");
let formSigno = document.querySelector("#formSigno");
let padre = document.querySelector("#contenedorPadre");

formSigno.addEventListener("submit", crearSigno);

function crearSigno(e) {
  e.preventDefault();

  switch (true) {
    case fecha.value >= 21 / 03 / 1000 && fecha.value <= 20 / 04 / 3000:
      padre.innerHTML = `<aside>
        <h2>Aries</h2>
        <p>Es un signo de Fuego y de modalidad Cardinal. Aries nace en tiempos de comienzo de estación y
            representa al deseante que empuja e inicia la secuencia zodiacal. Cuando nace una persona de
            Aire llega a esta vida un “innovador del deseo”. El Fuego Cardinal ariano posee una pasión
            activa y decidida; su fuerte esencia vital logra encender la vida y mover al espíritu.
        </p>
        <h3>Aries, el iniciador del zodiaco</h3>
        <p>Aries es el iniciador de los signos astrológicos y es el que empuja la acción vital, se lo
            asocia al Big Bang que dio inicio a toda la vida del universo. Aries está en la inauguración
            de todo donde el fuego irrumpe y detona; es el signo de la gran explosión y del gran inicio
            que se verá expresado en su personalidad explosiva e impetuosa.

            Su símbolo ♈ reproduce a la cabeza de un carnero que empuja con sus cuernos para abrirse
            paso ante obstáculos y dificultades. El dibujo también parece reproducir la gran explosión
            del fuego inicial del universo.

            Por ser el signo número uno es pionero y temerario. Aries inicia el ciclo zodiacal, es el
            tiempo donde el Sol pasa del Hemisferio austral al boreal o punto vernal o de intersección
            entre el ecuador y la eclíptica-. Es la época del año donde vuelven a comenzar los signos
            zodiacales, representa a la fuerza creativa que invita a volver a comenzar. Su máxima
            fortaleza y valentía empuja a todo el Zodiaco a ser reiniciado.
        </p>
        <h3>Cómo es la energía ariana</h3>
        <p>Aries tiene mínima conciencia de riesgo necesaria para animarse a empujar acciones allí donde
            otros no se atreven. Este signo es entusiasmo ciego que estimula a arrancar cualquier
            proceso. Simboliza inmensa potencia y máxima creatividad para motivar el inicio de la
            expresión de las doce melodías zodiacales a lo largo del año.

            Aries es pionero, tiene máxima velocidad y es puro coraje. Por ser el primer signo no
            registra la presencia de otros, para él no existe nada ni nadie más que su propia energía
            ariana. Su función es comenzar independiente y sin temor al qué dirán; tiene la suficiente
            osadía y empeño como para arremeter sin conciencia de peligro. Aries es básicamente
            capacidad de riesgo, es decidir sin depender de otros.

            Su deseo es básico y primitivo y lo lleva a accionar de modos muy obvios e inconscientes. Es
            sencillez primordial y espontaneidad en estado puro. Reúne la compleja combinación de
            inocente ceguera con máxima potencia y vitalidad.

            Aries goza con la espontaneidad y la expresión franca y directa. Tiene dificultad para las
            actitudes reflexivas y para la espera. Le cuesta ser correcto y tolerante y registrar el
            deseo de los otros.
        </p>
        <h3>Talentos del signo de Aries</h3>
        <p>El apasionado ariano es espontáneo y resolutivo. Su avidez y ardiente creatividad despiertan
            al zodíaco. Intrépido conquistador, asume riesgos y envalentona al resto. Impetuoso y
            corajudo, desconoce la palabra miedo.

            Es sincero y directo; es fácil saber qué piensa un ariano. Es claro en sus proyectos y es
            simple entender lo que desea. Rápido, diligente y decidido para resolver las distintas
            situaciones.

            Es escueto, leal y expeditivo, no se anda con vueltas ni con demora cuando tiene que tomar
            decisiones.
        </p>
        <h3>Dificultades características del signo de Aries</h3>
        <p>El ariano es impetuoso e irreflexivo. Intempestivo y sincericida, puede parecer brutal y
            cruel. Su carácter es impaciente y agresivo.

            Aries enojado puede volverse incontrolable. Se mueve con modos agresivos y se comunica desde
            un estilo cortante e incisivo. Es excesivamente frontal, confrontativo y peleador. No
            registra formalidades y no sabe ser diplomático.

            La paciencia no es su fuerte; es poco astuto para negociar y no sabe armar estrategias. Le
            cuesta acatar órdenes o cumplir con las pautas de comportamiento, tenderá a la rebeldía y a
            expresarse con malos modos. Anticonvencional, no respeta tiempos ni formalidades sociales.
            Las vueltas innecesarias o los trámites y la burocracia lo vuelven agresivo y malhumorado.
            Inconstante y poco previsor: aquello que requiere tiempo o preparación previa le resulta
            imposible de sostener.

            Su aceleración natural y su rapidez de conciencia lo hacen ingenuo y bravucón. Vive con
            ansias de apresurarse y tiende al estrés y al agotamiento. Habita en incesante estado de
            “Big Bang”: explota, hace ruido, vocifera, grita y enceguece de ira. Los frecuentes ataques
            de enojo lo sacan de su eje y lo demoran en sus proyectos creativos. Su vida se vuelve más
            potente cuando aprende a enojarse menos.</p>
        <h3>Aries y el cuerpo</h3>
        <p>Por ser el primer signo, se lo asocia a la primera parte del cuerpo, lo primero que nace: la
            cabeza. Aries tiene tendencia a ser vulnerable a tener golpes en la cabeza o migraña,
            también dolencias en el cerebro y, por tanto, también el sistema nervioso.

            La vista -que permite focalizar e ir directo hacia un punto deseado- suele ser también su
            punto sensible.

            Corporalmente serán espigados y de rasgos definidos -quizás puntudos y filosos-. Tienden a
            ser muy activos y necesitar estar en continuo movimiento. Será difícil ver a un ariano
            quieto por mucho tiempo. Se mueven golpeándose con las cosas, son torpes, ruidosos, veloces,
            directos, simples y expeditivos.

            Su mente es rápida, con ideas francas y claras. Pensarán y actuarán casi al mismo tiempo y
            muchas veces actuarán antes de pensar. Directos y sinceros al comunicar sus pensamientos.
        </p>
        <h3>Áreas de energía ariana</h3>
        <p>Ámbitos deportivos, situaciones que impliquen destreza corporal o que requieran animarse a
            asumir riesgos. Ámbitos donde circula adrenalina, donde sea necesario tomar decisiones
            vertiginosas.

            Los arianos están hechos para comenzar procesos no para sostener o esperar- y se sienten a
            sus anchas en espacios que requieran creatividad, innovación y apuro.</p>
        <h3>Marte, el planeta regente de Aries</h3>
        <p>Cada signo tiene una analogía o una resonancia con un planeta, así, se dice que cada signo es
            regido por ese planeta. El planeta regente de Aries es Marte, el dios de la guerra romano, o
            Ares, en la mitología griega. Es el símbolo de lo masculino.

            Se asocia al signo de Aries y al planeta Marte con características de personalidad
            marcadamente penetrantes, conquistadoras, valientes y definitorias.

            Aries puede expresarse desde una personalidad peleadora y reactiva o reconocer en su alma el
            coraje suficiente para iniciar aquello que otros no se atreven.</p>
        <h4>Por la astróloga, profesora de tarot y astrología Beatriz Leveratto. Aquí, fragmentos de su
            libro “Vibrar en tu elemento”.</h4>
    </aside>`;
      break;

    case fecha.value >= 21 / 04 / 1000 && fecha.value <= 21 / 05 / 3000:
      padre.innerHTML = ` <aside>
        <h2>Tauro</h2>
        <p>Son amantes de la buena mesa y de la buena cama. Aman lo dulce y aprecian la estabilidad en todos los órdenes.

            A menudo la motivación de su vida es la búsqueda de seguridad emocional y financiera. Generalmente priorizan el bienestar económico. Por fortuna tienen un excelente olfato para los buenos negocios.
            
            Típico signo de Tierra (universo que comparte con los signos Virgo y Capricornio), son tozudos y no son rápidos para aprender. Pero una vez que aprenden algo no lo olvidan jamás. Tienen virtudes y defectos como todos los tenemos, más allá del signo al que pertenezcamos. Pero hay características muy típicas de este signo y se sabe bien cómo es la personalidad de un taurino.
        </p>
        <h3>Signos y personalidad: cómo es Tauro</h3>
        <p>Los taurinos son perseverantes, confiables y predecibles. Su vestimenta es tradicional, moderadamente a la moda. ¿Sus colores? Primero que nada el verde, luego los pasteles y rosados. Se desplazan despacio, suelen tener la agenda bien organizada para andar sin apuro.

            Darle un poco más de velocidad a su vida no les sentaría nada mal, ya que la mayor parte tienen metabolismo lento y tendencia a engordar. No muy deportistas, son más de la meditación y el yoga. Para mover el cuerpo eligen actividades tranquilas como pilates. Les gusta todo lo que sea pisar suelo firme. Nada de danza aérea. Tampoco son lobos de mar sino gente de la tierra. Contemplar las montañas los llena de calma inexorablemente. En cuanto a la salud, su área delicada es el cuello.
        </p>
        <h3>Tauro como pareja</h3>
        <p>Encantadores y sensuales, amantes maravillosos siempre, taurinas y taurinos suelen dedicar mucho tiempo a la previa. Son detallistas, muy considerados con los deseos de su pareja y delicados en sus movimientos. Afectuosos, sinceros y confiables, invitan a la confidencia.

            El corazón de los nacidos en Tauro está lleno de sentimientos sólidos. A pesar de ser muy carnales, como odian la incertidumbre, priorizan la seguridad emocional de una pareja estable, por sobre aventuras sexuales pasajeras.
            
            A veces son demasiado posesivos. Tratan a su pareja como si fuera de su propiedad. Quieren saber con quién y a dónde va. Pueden llegar a ejercer un control agobiante sobre el ser amado. Esta posesividad es uno de los mayores problemas del signo, aunque por otro lado son muy generosos y suelen hacer regalos costosos.
        </p>
        <h3>Los taurinos en el trabajo</h3>
        <p>Se afianzan en empleos seguros, bien pagos, dentro de empresas estables, que les permitan planificar su economía, tener obra social y ahorrar o pagar una hipoteca para tener su casa propia. Los taurinos son trabajadores previsibles con opiniones consistentes. No les aburre la rutina. Suelen expresar su alto nivel emocional de forma positiva.

            Muchas veces su necesidad de seguridad económica entra en conflicto con su inclinación a la haraganería. Tienen un secreto anhelo de estar tranquilos sin preocupaciones. Por eso se los ve con más frecuencia en los mandos medios y no tanto en cargos altos. Van siempre a lo seguro.
        </p>
        <h3>Tauro en el hogar y como padres</h3>
        <p> Su casa es su mayor posesión. Sus muebles, su mayor satisfacción. Los eligen cómodos, mullidos, suaves y discretos, en colores serenos. Un sillón sólido y súper confortable, será su trono de felicidad, para quedarse horas en maratón de series frente a su gran televisor.

            Como es un signo de tierra, le encantan los materiales naturales. Le gustan la madera de quebracho, las vasijas de arcilla, las alfombras gruesas y los tejidos a mano. También les gusta el buen vino: seguramente contará con su pequeña bodega.

            Amantes de la música alegre y tranquila y de la naturaleza, suelen tener “dedo verde”: muchas plantas y muchos taurinos cultivan su propia huerta. Una casa con un jardín lleno de flores y pajaritos es su idea del paraíso. La cocina será el centro de la casa, un lugar cálido, especial y muy frecuentado, ya que los taurinos son muy buenos cocineros de comida casera y familiar.
            
            Bondadosos y estables, los taurinos son padres y madres que les preparan muy rica comida a sus hijos, a quienes educan en el valor de un hogar cálido, abierto y tranquilo para sus vidas. La taurina es la típica mamá que hace tortas y recibe a los amigos que vienen a estudiar con una bandeja de sandwiches.</p>
        <h4>Por la astróloga, profesora de tarot y astrología Beatriz Leveratto. Aquí, fragmentos de su
            libro “Vibrar en tu elemento”.</h4>
    </aside>`;

      break;

    case fecha.value >= 22 / 06 / 1000 && fecha.value <= 23 / 07 / 3000:
      padre.innerHTML = dasdas;

      break;

    case fecha.value >= 24 / 07 / 1000 && fecha.value <= 23 / 08 / 3000:
      padre.innerHTML = dasdas;

      break;

    case fecha.value >= 24 / 08 / 1000 && fecha.value <= 23 / 09 / 3000:
      padre.innerHTML = dasdas;

      break;

    case fecha.value >= 24 / 09 / 1000 && fecha.value <= 23 / 10 / 3000:
      padre.innerHTML = dasdas;

      break;

    case fecha.value >= 24 / 10 / 1000 && fecha.value <= 22 / 11 / 3000:
      padre.innerHTML = dasdas;

      break;

    case fecha.value >= 23 / 11 / 1000 && fecha.value <= 22 / 12 / 3000:
      padre.innerHTML = dasdas;

      break;

    case fecha.value >= 23 / 12 / 1000 && fecha.value <= 20 / 01 / 3000:
      padre.innerHTML = dasdas;

      break;

    case fecha.value >= 21 / 01 / 1000 && fecha.value <= 19 / 02 / 3000:
      padre.innerHTML = dasdas;

      break;

    case fecha.value >= 20 / 02 / 1000 && fecha.value <= 20 / 03 / 3000:
      padre.innerHTML = dasdas;

      break;

    default:
      alert("dia, mes y año ingresados no validos.");
      break;
  }
}
