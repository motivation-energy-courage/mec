<template>
  <div class="abouti">
    <h1 style="text-align: center; padding: 70px; font-size: 50px">Rating</h1>
    <div class="zara">
      <h1 style="color: black; font-size: 46px">
        {{ this.$route.params.brand }}
      </h1>
      <div class="zaraimage">
        <img v-bind:src="imgPath" width="320" height="280" />

        <div class="comprete">
          <img
            v-if="badness"
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-044.png"
            width="80"
            height="80"
          />
          <img
            v-if="sadness"
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-036.png"
            width="80"
            height="80"
          />
          <img
            v-if="soso"
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-012.png"
            width="80"
            height="80"
          />
          <img
            v-if="happy"
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-007.png"
            width="80"
            height="80"
          />
          <img
            v-if="great"
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-013.png"
            width="80"
            height="80"
          />

          <h2 style="font-size: 25px">Total Rating</h2>
          <h2>{{ this.$route.params.total }}</h2>
          <h2>{{ this.$route.params.totalnum }}</h2>
        </div>
        <div class="box">
          <h3>
            Location:{{ this.$route.params.location }}<br />Price:{{
              this.$route.params.price
            }}
          </h3>
        </div>
        <div class="zaraconcrete">
          <img
            src="https://cdn.pixabay.com/photo/2018/05/30/09/58/pollution-3441119_1280.jpg"
            width="470"
            height="770"
          />
          <img
            src="https://cdn.pixabay.com/photo/2021/05/16/06/46/india-6257329_1280.jpg"
            width="470"
            height="770"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg"
            width="470"
            height="770"
          />

          <div class="subtitle1"><h1>Environment</h1></div>
          <div class="subtitle2"><h1>Labor</h1></div>
          <div class="subtitle3"><h1>Animal</h1></div>

          <div class="environmentrate">
            <img
              v-if="envbadness"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-044.png"
              width="40"
              height="40"
            />
            <img
              v-if="envsadness"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-036.png"
              width="40"
              height="40"
            />
            <img
              v-if="envsoso"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-012.png"
              width="40"
              height="40"
            />
            <img
              v-if="envhappy"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-007.png"
              width="40"
              height="40"
            />
            <img
              v-if="envgreat"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-013.png"
              width="40"
              height="40"
            />

            <h3 style="line-height: 0px">Environment Rating</h3>
            <h4 style="line-height: 10px">{{ this.$route.params.envrate }}</h4>
            <h4 style="line-height: 8px">
              {{ this.$route.params.envnum }}
            </h4>
          </div>
          <div class="zaraenvironmentphraze">
            <h4 style="line-height: 40px">
              <div class="honnbun">{{ texts[this.$route.params.id] }}</div>
            </h4>
          </div>

          <div class="zaralaborrate">
            <img
              v-if="laborbadness"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-044.png"
              width="40"
              height="40"
            />
            <img
              v-if="laborsadness"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-036.png"
              width="40"
              height="40"
            />
            <img
              v-if="laborsoso"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-012.png"
              width="40"
              height="40"
            />
            <img
              v-if="laborhappy"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-007.png"
              width="40"
              height="40"
            />
            <img
              v-if="laborgreat"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-013.png"
              width="40"
              height="40"
            />
            <!-- <img
            src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-044.png"
            width="40"
            height="40"
          /> -->
            <h3 style="line-height: 0px">Labor Rating</h3>
            <h4 style="line-height: 10px">
              {{ this.$route.params.laborrate }}
            </h4>
            <h4 style="line-height: 8px">{{ this.$route.params.labornum }}</h4>
          </div>
          <div class="zaralaborphraze">
            <h4 style="line-height: 40px">
              {{ textss[this.$route.params.id] }}
            </h4>
          </div>

          <div class="zaraanimalrate">
            <!-- <img
              class="animalimg"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-040.png"
              width="40"
              height="40"
            /> -->

            <img
              v-if="animalbadness"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-044.png"
              width="40"
              height="40"
            />
            <img
              v-if="animalsadness"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-036.png"
              width="40"
              height="40"
            />
            <img
              v-if="animalsoso"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-012.png"
              width="40"
              height="40"
            />
            <img
              v-if="animalhappy"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-007.png"
              width="40"
              height="40"
            />
            <img
              v-if="animalgreat"
              src="https://rakugakiicon.com/ri/wp-content/uploads/2017/06/smile-013.png"
              width="40"
              height="40"
            />
            <h3 style="line-height: 0px">Animal Rating</h3>
            <h4 style="line-height: 10px">
              {{ this.$route.params.animalrate }}
            </h4>
            <h4 style="line-height: 8px">{{ this.$route.params.animalnum }}</h4>
          </div>
          <div class="zaraanimalphraze">
            <h4 style="line-height: 40px">
              {{ textsss[this.$route.params.id] }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    brand: String,
    rating: String,
    location: String,
    price: String,
    id: Number,
    total: String,
    totalnum: String,
    envrate: String,
    laborrate: String,
    labornum: String,
    animalrate: String,
    animalnum: String,
    brandpic: String,
    envnum: String,
  },
  data() {
    return {
      sadness: false,
      badness: false,
      soso: false,
      happy: false,
      great: false,
      envsadness: false,
      envbadness: false,
      envsoso: false,
      envhappy: false,
      envgreat: false,
      laborsadness: false,
      laborbadness: false,
      laborsoso: false,
      laborhappy: false,
      laborgreat: false,
      animalbadness: false,
      animalsadness: false,
      animalsoso: false,
      animalhappy: false,
      animalgreat: false,
      imgPath: this.$route.params.brandpic,
      texts: [
        "ZARAの環境評価はBADです。良い取り組みから言及すると、Zaraの親会社であるInditexでは、Closing theloopと呼ばれる衣服の再利用プログラムを開始しています。このプログラムにより衣服がセカンドライフを獲得できることに繋がります。また、服の包装にはリサイクルパッケージも使用しています。しかし、ZARAは製品を製造する際に繊維の無駄を最小限に抑える取り組みは取っていません。また、ZARAは自社の事業とサプライチェーンから発生する温室効果ガス排出量を削減するという目標を設定していますが、その目標達成が現時点で順調に進んでいるという実績はありません。",
        "UNIQLOの環境評価はSo Soです。ジーンズの仕上げ加工をティーカップ1杯分の水だけで行う技術の開発や、商品生産プロセスで発生する有害化学物質排出ゼロに向けた取り組みが推進されています。特に生産工場には環境影響評価が実施され、使い捨てプラスチックの使用量削減や再利用できる素材の回収と再利用による製品の生産が促進されています。また販売店舗や生産工場に太陽光パネルを設置し、LED導入率を93.8％に向上させ、温室効果ガスの削減にも積極的に取り組んでいます。",
        "GUの環境評価はSo Soです。GUは循環型社会を目指した服のリサイクルや、製造工程において排出される水の量を削減するためのジーンズの取り組みなど自然保護に向けて積極的に取り組んでいる姿勢を見せています。しかし、GHG（温室効果ガス）排出量削減の目標が科学的に公表されていません。また、循環型社会を目指してリサイクルの取り組みを実施していますが、大量生産／消費からの脱却も検討するべきという見解もあります。また、 BCIコットンを使用しているので、よりオーガニックなコットンの使用率を上げる必要性もあると言及できます。",
        "しまむらの環境評価はSO SOです。循環リサイクルの取り組みや廃棄ゼロを目指していて、その目標に対していくつか具体的に取り組みを行っています。しまむらは「在庫廃棄ゼロ」を達成するためにサプライヤーへ発注した商品は「完全買取」しています。また、発注商品を最後の1枚まで売り切るため、過剰在庫の廃棄（焼却処分）は行っておりません。また「買い物袋のリサイクル」を行っていて、買い物をした顧客に無料で渡した買い物袋を近くの店舗に持ち込むことで、買い物袋1枚あたり1円で回収する取り組みを行なっています。また、回収した買い物袋は、資源としてリサイクルし再利用しています。",
        "H&Mの環境評価はSo Soです。H＆Ｍでは企業規模を活かした国際的な取り組みが行わており、中でも回収した古着をリサイクルするサービスであるLooopでは８つある工程のどの工程でも水や染料を使用しないとして環境負荷を大きく削減しています。また、生地の裁断工程に人工知能を用いることで不要な端切れの廃棄を減らすアイデアの創出や、ワイン製造で発生する廃棄されるブドウの絞り粕をアップサイクルとしてレザーに活かしたブーツの生産など廃棄しない再利用に積極敵に取り組んでいます。",
        "GAPの環境評価はSo Soです。「水」「コットン」を軸に環境活動が推進されており、デニム洗浄に使用する水量を従来の20％削減する技術の開発・導入が進んでいます。コットンについては調達方法の限定によって品質を落とさずにサステナブルなコットンの調達に努めています。またリソースの回収やリサイクルの促進を業界全体で図り、回収したペットボトなどルをアップサイクル素材として生産したポリエステルやナイロンを製品の生産に積極的に利用しています。",
        "無印良品の環境評価はSo Soです。無印良品は2010年に循環型社会の形成に向けてリサイクルのプログラムを導入したり、木や自然の大切さを知ってもらうために独自のキャンプ場を運営するなどの取り組みを行なっています。また、不要な衣料品を回収しリサイクルしたり、残糸を軍手にしたりと、国が先導して動く前から環境保護に対する取り組みを積極的にしています。しかし現時点ではCO2排出量を測定したり、削減するための明確な目標が見受けられない状態です。",
        "adidasの環境評価はGOODです。2024年を目標に全ての製品で再生ポリエステルに移行するというミッションを掲げ、ゴミからル繰り出してアップサイクルする、捨てさせずに循環して使う、天然素材で商品を作るという地球環境に対して矛盾のない製品作りに向けた様々な取り組みが行わています。海洋投棄されたプラスチックを回収して生産されたシューズやリサイクル素材の使用率で素材が分別され性能を落とさない生産に力を入れています。回収したシューズから再生産する靴作りでは二酸化炭素の排出量を従来の生産工程の約6分の1の量に削減しています。また点天然素材として再生可能な菌糸体、キノコから作られた製品もあります。",
        "PeopleTreeの環境評価はGREATです。PeopleTreeは「森を壊さない」「水を汚さない」「空気を汚さない」「人と命を護る」「無駄にしない」という５つの環境ポリシーを定めて生産を行っています。森を壊さないというポリシーとして紙製品は非木材繊維を使用し、水を汚さないために塩素漂白を避け、生産現場の排水管理と水の汚染防止を促進しています。また梱包素材のリサイクルや再生可能素材の使用、ダイオキシンを出すプラスチック利用の規制に努めています。",
        "Patagoniaの環境評価はGOODです。長年にわたってコットン製品の全てにオーガニックコットンを採用し、リサイクル原料の使用を増やす方針を続けています。創業当初から計画的な環境方針がたてられており時代それぞれの地球環境問題に合わせて臨機応変な取り組みを実施してきました。将来的な取り組みとしては事業全体においてカーボン・ニュートラルになることを目指しフットプリントの削減やアパレル製品でリサイクル素材・リクレイム度素材のみの使用などを打ち出しています。",
        "NIKEの環境評価はSo Soです。NIKEではポリエステルやコットン、ゴムなどの主要素材を中心に低炭素素材の代替が促進されており、現時点でナイキ・ジョーダン・コンバースの３つの全製品の約78%が何等かのリサイクル素材を使用しています。またリサイクルポリエステルを使用した製品作りの考案が進んでおり、バージンポリエステルを使用して精製品を作った時と比較して約30％の二酸化炭素の排出量削減に貢献しています。しかし、製品に使用されるリサイクル素材の具体的な表記はあまり確認できません。また製品本体以外の部分での具体的な環境への取り組みは多く紹介されていません。",
        "StellaMsCartneyの環境評価はGOODです。動物福祉の観点と共通した認識のもと水や汚れに負けない特殊素材で長く使用できる商品を提供し、裏地にはペットボトルのリサイクル素材の使用を徹底しています。また化学薬品の使用による環境汚染を問題視し、デザインに関わらず最低限の使用に努めています。リアルレザーなど動物の皮を使用しないために作られた合成素材はリサイクルが可能であり、さらに合成に利用される素材や成分もリサイクルされた資源が使われているものもあります。また衣類以外の製品も豊富にある中で金属の使用制限や環境負荷削減を意識した取り組みが実施されています。",
        "Nonastiesの環境評価はGREATです。Nonastiesでは全ての商品がオーガニック認証（GOTS）を取得しています。生産者の努力を無駄にしない綿花を利用した製品作りと生産者に還元される仕組みを用いた素材利用活動の普及にも取り組んでいます。また、生産商品には有毒化学物質は使用しておらず、カーボンニュートラルでパッケージにはプラスチックを使用しないものも誕生しています。",
        "OUTERKNOWNの環境評価はGREATです。製品の素材として調達する繊維には有機繊維、リサイクル繊維、リサイクル繊維または再生繊維のいずれかであり、持続可能な素材とリサイクルも可能とする原料の積極的な利用に努めています。また、海洋への不法投棄や使えるはずの素材・製品の埋め立てを減らし、少しでもゴミを防ぐためのリサイクルや素材の追究、さらに修理や交換が促進され無駄を省いた循環作り、開発がなされています。",
      ],
      textss: [
        "ZARAの労働評価はBADです。ZARAの製造工程の半分は労働虐待のリスクが中程度あるスペインで行われています。ZARAは、サプライヤーのポリシー、監査、および修復プロセスに関する詳細情報を公開しているため、ある程度透明性があります。Zaraはまた、生産の最終段階にあるサプライヤーの詳細なリスト、サプライヤー監査の結果に関する情報、強制労働、男女平等、結社の自由に関する情報も公開しています。しかしサプライチェーン(商品の調達・製造から流通を経て消費者に届くまでのすべての工程)で生活賃金の支払いを保証するという言及がほとんどありません。",
        "UNIQLOの労働評価はBADです。2021年4月にウイグル人に対する強制労働と人道に対する罪を隠匿した疑いで人権団体から告訴されたほか、元従業員からの聞き取りや潜入調査などによって5年で8割を超える離職率のタカさや下請け工場の労働環境の劣悪さや健康および安全への危惧が報告されています。UNIQLOを展開するファーストリテイリングは問題点について認めた上で国内店舗の従業員をたいしょうに正社員化する方針を発表していますが、国内に限られており国外の下請け工場などの労働環境の改善の具体的な改善策の記述は多くはありません。",
        "GUの労働評価はBADです。GUは労働に関する国際基準の行動規範を公開していますが、工場で働く人に生活賃金を支払っているかは不透明な状態です。日本を本拠とする国際人権NGO「ヒューマンライツ・ナウ」が、アパレル業界の労働環境に関する実態調査を行った結果、ユニクロやユニクロと同じFR社の完全子会社であるGUの下請け工場における労働問題が非常に深刻だという声が聞かれたそうです。これらから、GUはウイグル族の人権問題などに関与している可能性があると言えます。",
        "しまむらの労働評価はVERY BADです。2018年にしまむらが衣料品を仕入れている取引先の下請け会社で、外国人技能実習生を違法に働かせていることが判明しました。その後、しまむらは全ての取引先に人権侵害がないように通達をしています。しかし、ウェブサイトを見る限りでは、未だに労働環境に対する情報に対する透明性が著しく低く、実際に何を、どう、どのくらい取り組んでいるのか不明瞭な状態であります。また英国の人権団体「Know The Chain」が2020年に世界のアパレル系企業64社を調査したところしまむらは、「何の措置も講じていない」という厳しい評価となりました。",
        "H&Mの労働評価はSo Soです。AIの活用によるサプライチェーンの見直しや製造を担うバングラデシュの労働者に対し原理の最低賃金の50％上回る給与の支給があります。H&Mでは自分らしさが尊重され、共通の価値観を持って意識高く働くことができる環境作りが実施され、早期からの責任のあるポジションへの配属や育成に力を入れています。しかし、下請け工場の開発や製造面で無理を強いている現状が少なからず報告されおり、見せかけの取り組みとして評価は分かれやすく改善の余地があると言えます。",
        "GAPの労働評価はBADです。GAP社の商品に携わる8割が女性であり、ライフスキルやキャリアにまつわるトレーニングや機会が積極的に設けられています。一方で女性の労働者が多いことから学びの機会がなくなったり、個人の状況や環境によって思うようなキャリアを描けないなどの背景の存在を否定することができず、労働に見合った給与の貸与などについては明確な記述はありません。",
        "無印良品の労働評価はBADです。英国の人権団体「Know The Chain」が2020年に世界のアパレル系企業64社を調査したところ無印良品を手がける「良品計画」（本社・東京都豊島区）は、下から2番目の「最低限の措置しか講じていない」と評価されました。良品計画はKTCに対し、中国・新疆ウイグル自治区にある工場について、「徹底した調査を行った結果、重大な問題は確認されていない」と報告しましたが、KTCは「『強制労働を特定するための調査は新疆では不可能』とする業界他社や監査機関の指摘と矛盾している」と疑問の目を向けている状態です。",
        "adidasの労働評価はSo Soです。adidasはサプライチェーンの管理を徹底しており、サプライヤーの能力向上と監査が繰り返し行い、さらに外部の第三者機関によって十分な評価・教育プログラムが組まれています。監査によって判明した怠慢や問題は明確に改善指示が出され、改善されない場合は処罰などの対処がなされます。この評価制度・管理制度によって評価リスクと販売リスクのカットに繋げ品質と基準の向上に努めています。",
        "PeopleTreeの労働評価はGREATです。Peopletreでは商品を作る職人や生産者に対して、カタログなどを利用した商品を知る機会や技術研修の機会を設けています。この機会は生産を担う団体同士の交流やコミュニティプロジェクトの推進や全体的に統一したスキルアップの効果をもたらしています。また、生産団体への発注時に必要に応じて歯中学の50％を前払いすることで、農家の規模や団体の大小などに関わらずフェアトレードが行えるように資金繰りができる仕組みが整えられています。またフェアトレードで得た利益はコミュニティに還元され、貧しい家庭の子どもたちへの教育の機会の提供や地域開発に役立てられています。",
        "Patagoniaの労働評価はSo Soです。Patagoniaでは、企業規模拡大に合わせて生産を任せるサプライチェーンとの関係作りや労働環境・給与などの条件の見直しを徹底しており、情勢変化や工場規模など条件に応じて賃金が上げられるようにフェアトレードを重要視しています。また、サプライヤーの教育や研修も第三者機関やNGOなど団体を踏まえて追究し展開することで、評価の統一や労働条件の偏りを防ぎます。これによってより良い製品生産を目標にした労働者との関係作りと定期的な労働条件・環境の調査を行うことで常に改善と発展に取り組んでいます。",
        "NIKEの労働評価はBADです。NIKEは1990年代に生産工場のあるインドネシアやベトナムといった東南アジアで低賃金労働や有害ガスなどの劣悪な環境での長時間労働や児童労働などが問題として大きく取り上げられた過去があります。この問題以降、人権問題や安全衛生管理・サプライヤーの労働環境の見直しなどに外部の機関の介入などによって取り組んでいますが、国外の目が行き届きにくい生産工場などでは改善がみられない長時間労働や労働環境の劣悪さの報告が少なくありません。",
        "StellaMsCartneyの労働評価はSo Soです。海外の生産工場で働く女性を主としてフェアトレードによって働きに見合った賃金や経済的な自立に繋がる支援のプロジェクトに参加しています。また、労働者の権利の保護と環境・条件の改善を目的としたチャリティー活動への参加や見直しが積極的に行わています。しかし、StellaMsCartneyの労働者に対する具体的な労働環境や条件に関する他の取り組みの紹介はあまり多くはなされておらず不透明な部分がないとは言い切れません。",
        "Nonastiesの労働評価はGREATです。ブランド発祥の由来が綿花農家の生活改善や生産効率上昇などであり、生産者の生活水準の向上や地域社会の生活に貢献しています。さらに100％のフェアトレード認証の獲得により、労働者の権利を守り生活水準の向上に努めています。また生産を行う工場で児童労働はなく、労働環境として危険排除に徹底して取り組まれており労働環境・条件への取り組みが徹底されていると言えます。",
        "OUTERKNOWNの労働評価はGOODです。Outerknownは衣類のステッチを販売する前に公正労働境界（FLA）による国際労働基準の認定を追究した最初のブランドであり、サプライヤーの認定や各従業員の労働環境・条件の統一化を図っています。また労働者の生活や権利などを学ぶ機会の提供や支援するプログラムも作成されており、サプライヤーごとが責任のある取り組みに力をいれています。またフェアトレードUSAによって安全で健康的に繁栄した労働条件を保証しています。また製品に持続可能な素材を使用して消費者に生産ポリシーを尊重することで労働者の功績や活動が公正にあるように努めています。",
      ],
      textsss: [
        "ZARAの動物評価はBADです。ZARAの動物福祉方針は、The Five Freedoms for Animal（国際的に認められている動物の福祉基準)と連携しており、毛皮、アンゴラ、および動物でテストされた製品の在庫を厳しく禁止しています。しかし残念ながら、ZARAはウール、レザー、ダウン、エキゾチックな動物の毛を使用していることから、動物繊維が製造工程において少なからず存在すると判断できるため、動物評価においても「不十分」と評価します。",
        "UNIQLOの動物評価はSo Soです。UNIQLOではPETAなどの報告を受け2021年秋冬シーズンからの商品のアルパカ素材使用を禁止しており、2018年からリアルファー、2020年からモヘア素材を使用をしていません。さらに動物系素材の調達方法について継続的な見直しを行う方針を出しており、素材の採取方法の工程や経緯についての確認に取り組んでいます。さらにボランティア活動として環境教育や自然の回復、土地の再生などに取り組む機会も設けられています。",
        "GUは動物福祉に対してのポリシーがないので評価ができません。",
        "しまむらは動物福祉に対してのポリシーがないので評価ができません。しかし、2014年にリアルファー（毛皮）製品の販売中止を求める約4000人分の署名の受け取りをしまむらが拒否したことは記録に残すべきことでしょう。",
        "H&Mの動物評価はSo Soです。2013年にアンゴラウールの使用を禁止し、動物福祉ポリシーとして傘下ブランドで動物の毛や毛皮、ダウン皮革の使用を禁止、さらに2018年にはモヘア素材の使用を禁止しています。動物系素材の調達方法では残酷な動物輸送が行わている国からの皮革の調達を禁止し、食肉生産を目的としてしいくされた動物から残った皮革を利用し、本物の毛皮を販売しないというポリシーが護られています。",
        "GAPの動物評価はBADです。GAP傘下の他ブランドも含めて2019年からモヘア素材の使用を禁止しており、2007年からはグループ全体で本物の毛皮を扱っていません。また製品の素材として絶滅の危機にさらされている森林からの木材由来の素材の調達を禁止しており、デニム洗浄に植物由来の柔軟剤を使用することで環境負荷の削減に取り組み動物性素材の使用削減にも取り組んでいます。しかし、モヘア素材以外の動物性素材の使用制限について記述が少なく動物福祉のポリシーは他ブランドと比較して明確ではありません。",
        "無印良品の動物評価はSo Soです。無印良品は公式Webサイトの中で化粧品の動物実験の有無に対して、「化粧品は、化粧品メーカーへの委託製造で作られていますが、既に「効能・効果」と「安全性」が確認されている原料を使用して製造しており、製造段階ではもとより、製品段階での「動物実験」も行なっておりません。」と回答しています。しかし、化粧品以外の商品は動物実験をしているかについての明記はなく、情報開示に対する透明性が低い状態です。",
        "adidasの動物評価はSo Soです。近年注目度の高いある商品では全ての商品にリサイクル素材が使用され動物由来の素材を使用しない製品作りに向けた取り組みが積極的に行われています。また海洋生物の生命を最も脅かす汚染された海洋投棄プラスチックの回収イベントの開催や回収したプラスチックを再利用した製品作りにも力を入れています。またシューズ以外の衣類などの製品でも動物性素材の使用量は減少傾向にありリサイクルのポリエステルの利用が進んでいます。",
        "PeopleTreeの動物評価はGOODです。染色しやすい白い毛のアルパカを求める割合の増加によってアルパカの個体数の減少という現状を受け止め、Peopletreでは自然の牧草で育てられたアルパカの毛を手紡ぎ、手編みして天然の毛色を活かした利用が行われています。また素材の調達方法の規制やルーツの確認を徹底し無駄な利用を削減し環境・動物ともに配慮した生産に努めています。アルパカの毛以外の具体的な動物福祉に関する記述はあまり多くはされていません。",
        "Patagoniaの動物評価はSo Soです。動物性素材の調達方法として生きた鳥などから毛や皮を採取しないことを基準とし、ルーツの確認を徹底しています。また調達における動物福祉に関する教育や研修を設け、動物福祉に関するシステムの改善にも取り組んでいます。また、製品によっては動物性素材を一切使用せずに生産しているものもあり、今後動物性素材の使用の削減と調達基準の見直しが促進される傾向にあります。",
        "NIKEの動物評価はBADです。スニーカー製品以外の衣類なでも再生ポリエステルやリサイクル素材を使用した製品作りが進んでおり、さらに従来動物性素材が使用されているスニーカーのレース部分までにも動物性素材ではなくリサイクル素材や天然素材の利用が促進されています。また動物性の皮革を使用しない「ナイキスキン」を使用したシューズも注目を集めています。しかし、具体的に使用を禁止している動物性素材などの追及はありません。",
        "StellaMsCartneyの動物評価はGOODです。StellaMsCartneyでは創業者の意思のもと、一切の動物の皮を使っておらずリアルレザーや毛皮を使用したものはありません。デザインに制限がかかるとしても動物性素材の使用を出来る限り制限し、エコレザーの使用によって商品の信頼を獲得しながら動物福祉を満たした成果をあげています。動物福祉・愛護の意識を周囲にも広げるための取り組みも商品の発表やイベントなどで積極的に行われています。皮以外の動物性素材の代用には再生カシミヤや人口スパイダーシルクなど環境にも配慮した製品の利用が推進されています。",
        "Nonastiesの動物評価はGREATです。Nonastiesで生産されている製品には毛皮、羊毛、革、絹の全てが使用されておらず、100％PETA承認ビーガン生産です。この生産ポリシーによって衣類の生産工程において動物性食品は一切使用されておらず、動物実験や残虐行為もない植物ベースの製品が提供されています。骨やウールに至るまで動物性素材が使用されておらず、オーガニックのフェアトレードコットン100％の製品が多くあります。",
        "OUTERKNOWNの動物評価はSo Soです。OUTERKNOWNは2人のサーファーの手から誕生しており、海を中心とした方針が多いと言えます。動物性素材の削減として植物性のナッツを使用したボタンの開発や海洋生物の生命を危険に晒す海洋を汚染する廃棄物の回収とそれらを利用した商品の生産、ゴミの回収を促進するための募金活動への参加やキャンペーンが継続的に実施されています。",
      ],
    };
  },
  created: function() {
    if (this.total === "⭐️⭐️★★★") {
      this.sadness = true;
    }
    if (this.total === "⭐️★★★★") {
      this.badness = true;
    }
    if (this.total === "⭐️⭐️⭐️★★") {
      this.soso = true;
    }
    if (this.total === "⭐️⭐️⭐️⭐️★") {
      this.happy = true;
    }
    if (this.total === "⭐️⭐️⭐️⭐️⭐️") {
      this.great = true;
    }
    if (this.envrate === "⭐️⭐️★★★") {
      this.envsadness = true;
    }
    if (this.envrate === "⭐️★★★★") {
      this.envbadness = true;
    }
    if (this.envrate === "⭐️⭐️⭐️★★") {
      this.envsoso = true;
    }
    if (this.envrate === "⭐️⭐️⭐️⭐️★") {
      this.envhappy = true;
    }
    if (this.envrate === "⭐️⭐️⭐️⭐️⭐️") {
      this.envgreate = true;
    }
    if (this.laborrate === "⭐️⭐️★★★") {
      this.laborsadness = true;
    }
    if (this.laborrate === "⭐️★★★★") {
      this.laborbadness = true;
    }
    if (this.laborrate === "⭐️⭐️⭐️★★") {
      this.laborsoso = true;
    }
    if (this.laborrate === "⭐️⭐️⭐️⭐️★") {
      this.laborhappy = true;
    }
    if (this.laborrate === "⭐️⭐️⭐️⭐️⭐️") {
      this.laborgreat = true;
    }
    if (this.animalrate === "⭐️★★★★") {
      this.animalbadness = true;
    }
    if (this.animalrate === "⭐️⭐️★★★") {
      this.animalsadness = true;
    }
    if (this.animalrate === "⭐️⭐️⭐️★★") {
      this.animalsoso = true;
    }
    if (this.animalrate === "⭐️⭐️⭐️⭐️★") {
      this.animalhappy = true;
    }
    if (this.animalrate === "⭐️⭐️⭐️⭐️⭐️") {
      this.animalgreat = true;
    }

    //  if (this.brand==="ZARA")
  },
};
</script>

<style>
.zara {
  position: absolute;
  top: 466px;
}
.zaraimage {
  position: relative;
  top: 100px;
  text-align: center;
}

.zara h1 {
  position: relative;
  top: 100px;
  text-align: center;
  color: white;
}

.comprete {
  font-family: "Baskerville Old Face", serif;
  padding: 0.5em 1em;
  margin: 2em 0;
  background: #ffffef;
  border: dashed 2px yellow; /*点線*/
  height: 160px;
  font-family: "Baskerville Old Face", serif;
  width: 25%;
  height: 270px;
  position: relative;
  left: 36%;
}

.img-border {
  border: 4px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.comprete p {
  font-size: 42px;
  margin: 0;
  padding: 0;
}

.zaraconcrete {
  display: flex;
  gap: 5px 10px;
  z-index: 10;
}

.subtitle1 {
  z-index: 20;
  position: absolute;
  left: 140px;
  top: 560px;
  font-family: "Baskerville Old Face", serif;
  color: white;
  padding: 1rem 0.5rem;
  line-height: 0.85em;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
}

.subtitle2 {
  position: absolute;
  left: 660px;
  top: 560px;
  font-family: "Baskerville Old Face", serif;
  color: white;
  padding: 1rem 0.5rem;
  line-height: 0.85em;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
}

.subtitle3 {
  position: absolute;
  left: 1150px;
  top: 560px;
  font-family: "Baskerville Old Face", serif;
  color: white;
  padding: 1rem 0.5rem;
  line-height: 0.85em;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
}

.environmentrate {
  z-index: 20;
  position: absolute;
  top: 700px;
  left: 115px;
  padding: 0.5em 1em;
  margin: 2em 0;
  background: #f0f7ff;
  border: dashed 2px #5b8bd0; /*点線*/
  height: 160px;
  font-family: "Baskerville Old Face", serif;
}

.zaralaborrate {
  z-index: 20;
  position: absolute;
  top: 730px;
  left: 600px;
  padding: 0.5em 1em;
  background: #eaffea;
  border: dashed 2px green; /*点線*/
  height: 160px;
  width: 200px;
  font-family: "Baskerville Old Face", serif;
}

.zaraanimalrate {
  z-index: 20;
  position: absolute;
  top: 730px;
  left: 1105px;
  padding: 0.5em 1em;
  background: #fff2e5;
  border: dashed 2px orange; /*点線*/
  height: 160px;
  width: 200px;
  font-family: "Baskerville Old Face", serif;
}

.zaraenvironmentphraze {
  color: black;
  position: absolute;
  left: 45px;
  top: 925px;
  background-color: rgba(240, 234, 234, 0.62);

  height: 500px;
  width: 400px;
}

.zaralaborphraze {
  color: black;
  position: absolute;
  left: 520px;
  top: 925px;
  background-color: rgba(240, 234, 234, 0.62);
  height: 500px;
  width: 400px;
}

.zaraanimalphraze {
  color: black;
  position: absolute;
  left: 1000px;
  top: 925px;
  background-color: rgba(240, 234, 234, 0.62);
  height: 500px;
  width: 400px;
}

.box {
  position: absolute;
  top: 340px;
  right: 370px;
  padding: 0.5em 1em;
  margin: 2em 0;
  color: #232323;
  background: #fff8e8;
  border-left: solid 10px #ffc06e;
}

.abouti {
  background-image: url(https://cdn.pixabay.com/photo/2016/12/12/20/34/shirt-1902601_1280.jpg);
  background-size: cover;
  height: 580px;
  width: 100%;
  position: absolute;
  top: 0;
}

.abouti h1 {
  color: white;
}
</style>
