"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin, ExternalLink } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

const eventsData = {
  1: [
    // =========================
    // 26 FEB 2026 – Trinity Dwarka
    // =========================

    {
      id: 1,
      name: "Inaugural Session",
      venue: "Stage",
      time: "10:00 AM – 11:00 AM",
      description:
        "Opening ceremony marking the official beginning of Trinity Fiesta 2026.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771009215/481037849_18447462175076169_6204287915062577621_n.jpg_stp_dst-jpg_e35_tt6__nc_cat_110_ig_cache_key_MzU3NDg0ODg3Mzg2MTg5NjgwMA.3-ccb7-5_ccb_7-5__nc_sid_58cdad_efg_eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTU5LnNkci5DMy_p3xr8k.jpg",
      side: "left",
    },
    {
      id: 2,
      name: "Pixclusive",
      venue: "Tips Wall",
      time: "11:00 AM – 4:00 PM",
      description:
        "Creative photography competition showcasing powerful visual storytelling.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010711/pixclusive_wfcrps.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771048172/pixclusive_ecnkbv.pdf",
      registernow:
        "https://docs.google.com/forms/d/1ahHn8NXNSvc85BNkKypidQ_nforDnM_7XIeJH0XrjBI",
      side: "right",
    },

    {
      id: 3,
      name: "Nritya Nivedan",
      venue: "Stage",
      time: "11:00 AM – 12:30 PM",
      description:
        "Solo dance competition celebrating expression, rhythm and technique.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010679/nrityanivedan_skl5l6.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/nrityaNivedan_unf2bf.pdf",
      registernow:
        "https://docs.google.com/forms/d/1MQkA7EgOYTp33bsk76C7IYGfAQ5sCEL89aqfPnoUTuw",
      side: "left",
    },

    {
      id: 4,
      name: "60 Sec Saga",
      venue: "Trinity Dwarka",
      time: "11:00 AM",
      description:
        "60-second reel making competition capturing moments creatively.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010676/60secsaga_lxsyiu.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/60SecSaga_b5pxme.pdf",
      registernow:
        "https://docs.google.com/forms/d/1X3pB841oH2DPtg64fLg2BDuOliY9Dwt03FkSEx_gagI",
      side: "right",
    },

    {
      id: 5,
      name: "Natparn",
      venue: "Under Metro Line",
      time: "11:00 AM – 3:00 PM",
      description: "Street theatre performances highlighting social themes.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010678/natparn_ujlr8x.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/natparn_lgn6sn.pdf",
      registernow:
        "https://docs.google.com/forms/d/1M3rUJv7bPz3aNcvujUgFqbQi1YxHxxm61sXwqt1PiRs",
      side: "left",
    },

    {
      id: 6,
      name: "Uncut Stories",
      venue: "Conference Room",
      time: "11:00 AM – 12:30 PM",
      description:
        "Short film competition focused on storytelling and cinematic execution.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010741/uncutstories_ptazb0.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/uncutStories_jzdw7f.pdf",
      registernow:
        "https://docs.google.com/forms/d/1BAQ3soC4X8TIl5Ch0jaIlOTOpF7wIajYcgQPWJMCyu0",
      side: "right",
    },

    {
      id: 7,
      name: "The 404 Makeover",
      venue: "Lab-605",
      time: "11:00 AM – 12:30 PM",
      description: "UI/UX design challenge to creatively redesign a 404 page.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010679/the404makeover_dmpblq.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/404Makeover_mz69fr.pdf",
      registernow:
        "https://docs.google.com/forms/d/1bZfaXKZ-Nt3pRieNSh-j033aySnIE3_lh6dxsvVn26U",
      side: "left",
    },

    {
      id: 8,
      name: "Legal Startup and Business Plan",
      venue: "Room 802",
      time: "11:00 AM – 2:00 PM",
      description:
        "Business plan competition promoting innovative legal startup ideas.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010739/legalstartupandbusinessplan_ozfxij.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/legalStartUp_j0wipi.pdf",
      registernow: "",
      side: "right",
    },

    {
      id: 9,
      name: "Shadow Trace",
      venue: "Lab-305",
      time: "11:00 AM – 1:00 PM",
      description:
        "Cyber investigation challenge solving simulated digital crime cases.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010676/shadowtrace_lu4mvw.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/shadowTrace_ko2b4n.pdf",
      registernow:
        "https://docs.google.com/forms/d/1grhQJIsDWVZt-dowkRs-9bEUydDJVN2UZFFvr7TQIIo",
      side: "left",
    },
    {
      id: 11,
      name: "Sing Star Arena",
      venue: "MPH",
      time: "11:00 AM – 1:00 PM",
      description:
        "Solo singing competition showcasing vocal talent and stage presence.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010678/singstararena_fkvdvj.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/singStarArena_dxaho9.pdf",
      registernow:
        "https://docs.google.com/forms/d/1pVSFHWSqLjSlk0RKYRUKX1uYXqK6t5h9uA7i5UFs98U",
      side: "right",
    },

    {
      id: 12,
      name: "Valorant",
      venue: "Lab-304",
      time: "11:00 AM",
      description:
        "Team-based esports tournament focused on precision and coordination.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010678/valorant_scgmrt.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/valorant_c82kt2.pdf",
      registernow:
        "https://docs.google.com/forms/d/1Rjli737Dj5YELhikUpFmL4XdWwKsBEYRDql_i_f18e0",
      side: "left",
    },

    {
      id: 13,
      name: "Innovator's Print",
      venue: "Postproduction Lab",
      time: "11:00 AM – 1:00 PM",
      description:
        "Innovation challenge to design, prototype and present creative solutions.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010715/innovatorsprint_mjvojp.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/innovatorPrint_so93yq.pdf",
      registernow:
        "https://docs.google.com/forms/d/1WcvVV5EKcYMr0Jd3Fxe1FifFL4mOoR6qUYjEfdoTZCY",
      side: "right",
    },

    {
      id: 14,
      name: "Genre Jeopardy",
      venue: "Room 402",
      time: "11:00 AM – 1:00 PM",
      description:
        "Quiz competition testing knowledge across entertainment genres.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010677/genrejeopardy_ylxspj.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/genreGeopardy_xe2mgs.pdf",
      registernow:
        "https://docs.google.com/forms/d/1tKPJzAbB8clk9I2PWU6rgTI82OO1LGOPk52rRRPQ8Us",
      side: "left",
    },

    {
      id: 15,
      name: "Future Frames",
      venue: "Room 102",
      time: "11:00 AM – 1:00 PM",
      description:
        "Case mapping competition solving real-world business challenges.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010740/futureframes_xzhhlw.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/futureFrames_wga3zb.pdf",
      registernow:
        "https://docs.google.com/forms/d/11qcC-zDUx0pmIEEYWbC9TU7Xu3spI73-9mHgkw9T8Q0",
      side: "right",
    },

    {
      id: 16,
      name: "Sahitya Sangam",
      venue: "Room 104",
      time: "11:00 AM – 1:00 PM",
      description:
        "Literary performance blending poetry, expression and voice.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010717/sahityasangam_aexqhe.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/sahityaSangam_dbfdce.pdf",
      registernow:
        "https://docs.google.com/forms/d/1CVYMsHxn66yudrxqW7DYA14-dqFgtOprsl1hcB1ZHX8",
      side: "left",
    },

    {
      id: 17,
      name: "Fireless Fusion",
      venue: "Room 201",
      time: "11:00 AM – 1:00 PM",
      description:
        "Creative culinary challenge preparing innovative dishes without fire.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010716/firelessfusion_rl92te.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771050861/firelessfusion_fsxbcz.pdf",
      registernow:
        "https://docs.google.com/forms/d/1NkY9qm1pViRTcyZEIYPFRYJA4DmvW6Uj3YLscNaktk8",
      side: "right",
    },

    {
      id: 18,
      name: "Mix-N-Match Art",
      venue: "MPH (Near Canteen)",
      time: "11:00 AM – 1:00 PM",
      description:
        "Collage art competition expressing themes through mixed materials.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010738/mixnmatchart_veivbl.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/mixNMatch_nl4fm7.pdf",
      registernow:
        "https://docs.google.com/forms/d/1EDzl-Vi8d0ME_47A1LbWHHIaqVam5rtEpS3kpSWyfMU/",
      side: "left",
    },

    {
      id: 19,
      name: "On-Air Challenge",
      venue: "Stage",
      time: "12:30 PM – 1:30 PM",
      description:
        "Radio jockey style competition testing spontaneity and communication.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010739/onairchallenge_uzmpi9.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/onAirChallenge_ickxom.pdf",
      registernow:
        "https://docs.google.com/forms/d/1Np3-mxW_x00yiJm45JLh21LJDr9AROAJaha7ZDav-zk",
      side: "right",
    },

    {
      id: 20,
      name: "Genre Glitch",
      venue: "Lab-605",
      time: "12:30 PM – 2:00 PM",
      description:
        "Creative technical competition blending genres and digital skills.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010711/genreglitch_yc9xii.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/genreGlitch_knmeok.pdf",
      registernow:
        "https://docs.google.com/forms/d/1BEoywMvEi8g3fXmLtVA92DdPC2U_s5eHXShsH1ztCxk",
      side: "left",
    },

    {
      id: 21,
      name: "Scholar Stage",
      venue: "Room 404",
      time: "12:30 PM – 2:30 PM",
      description:
        "Academic presentation competition showcasing research and ideas.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010676/scholarsstage_s99nkl.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/scholarStage_b5w57l.pdf",
      registernow:
        "https://docs.google.com/forms/d/1Ux5wTvfg-58OP1DBaKdqWwgWHGT4M0r9jCaTJ329DPk",
      side: "right",
    },
    {
      id: 10,
      name: "BGMI",
      venue: "Room 406",
      time: "1:00 - 3:00 PM",
      description:
        "Competitive mobile esports battle testing strategy and survival skills.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010676/bgmiegame_drmv7m.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/bgmi_u49g1j.pdf",
      registernow:
        "https://docs.google.com/forms/d/1pSmOwUO0qhYHMACOINFtcC5WnuO-Ek23bHAMCQxtbaM/",
      side: "left",
    },
    {
      id: 22,
      name: "Brainwave Pitch",
      venue: "Room 407",
      time: "1:00 PM – 3:00 PM",
      description:
        "Entrepreneurial pitch competition presenting innovative ideas.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010677/brainwavepitch_pxev09.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/brainWavePitch_g20v1w.pdf",
      registernow:
        "https://docs.google.com/forms/d/1IG7-C04Sp25V9DU7xpurWiBEEd0O2ffeS_7_fYRQak4",
      side: "right",
    },

    {
      id: 23,
      name: "Codex Build",
      venue: "Lab-305",
      time: "1:00 PM – 3:00 PM",
      description:
        "Coding competition testing logic, speed and technical skills.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010677/codexbuild_g2g3ud.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771048159/codexBuild_gpygpk.pdf",
      registernow:
        "https://docs.google.com/forms/d/1eXg9VT4oE5cS1X3s06dTXGRb6Br-kJQj6gO3_4CLkkc",
      side: "left",
    },

    {
      id: 24,
      name: "Brand Bot",
      venue: "MPH",
      time: "1:00 PM – 3:30 PM",
      description:
        "Marketing strategy competition focused on branding innovation.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010673/barndbot_affqa6.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/brandBot_l2rg4s.pdf",
      registernow:
        "https://docs.google.com/forms/d/14X_8TtDUDxAo9rCP4sDzP_cJLPo0HT9bsruz0SoDBbk",
      side: "right",
    },

    {
      id: 25,
      name: "Mime Magic",
      venue: "Room 204",
      time: "1:00 PM – 3:00 PM",
      description:
        "Mime performance competition expressing stories without words.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010675/mimemagic_usishw.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/mimeMagic_lzavhx.pdf",
      registernow:
        "https://docs.google.com/forms/d/18mjIsUZYVj7gMhE3JiJDTK2gdHmO6VTGdgF_dEz2mkA",
      side: "left",
    },

    {
      id: 26,
      name: "Profit Play Auction",
      venue: "Room 102",
      time: "1:00 PM – 3:00 PM",
      description:
        "Strategic auction-based competition testing financial decision making.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010738/profitplayauction_tv6ace.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/profitPlayAuction_g1oquw.pdf",
      registernow:
        "https://docs.google.com/forms/d/1wSGBVhLIkL_xKTPDTLQnRHeuta8SMqfnZkwgLoG-9Io",
      side: "right",
    },

    {
      id: 27,
      name: "Battle of Brains",
      venue: "Room 502",
      time: "1:00 PM – 3:00 PM",
      description:
        "Intellectual competition challenging analytical and logical skills.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010677/battleofbrains_ppejw8.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/battleOfBrains_zfyxib.pdf",
      registernow:
        "https://docs.google.com/forms/d/1iflORKWWDuAgpP_BbviZvjrEyaS6dyKF_HC_5_Djmdw",
      side: "left",
    },

    {
      id: 28,
      name: "Talk Knockout",
      venue: "Room 104",
      time: "1:00 PM – 3:00 PM",
      description: "Public speaking contest testing persuasion and confidence.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010677/talkknockout_q6ch1p.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/talkKnockout_uro5ti.pdf",
      registernow:
        "https://docs.google.com/forms/d/1_4mm8y8YHQTNfqk7IwO441tUwBvfryVAwjeBrdiSdw8",
      side: "right",
    },

    {
      id: 29,
      name: "Cyber Tok",
      venue: "Room 402",
      time: "1:00 PM – 3:00 PM",
      description:
        "Digital creativity competition focused on short-form content.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010678/cybertok_l1ddfi.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/cyberTok_ca3kcc.pdf",
      registernow:
        "https://docs.google.com/forms/d/13_n7oXsHrIj5ydc2TjJl3a437ALjA0KdOCWXhTKTYAY",
      side: "left",
    },

    {
      id: 30,
      name: "Scene Stealers",
      venue: "Stage",
      time: "1:30 PM – 2:30 PM",
      description: "Dramatic performance competition showcasing acting talent.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010715/scenestealers_omilzq.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/sceneStealers_apnryl.pdf",
      registernow:
        "https://docs.google.com/forms/d/15hPc8aVg6NPQuSWw78S2-Q0d7Bbg0p5twvbuEdSFTjQ",
      side: "right",
    },

    {
      id: 31,
      name: "Agreement Drafting and Presentation Competition",
      venue: "Room 707",
      time: "2:00 PM – 4:00 PM",
      description:
        "Legal drafting competition focusing on practical documentation skills.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010672/agreementdraftingandpresentationcompetition_mlhnzu.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/agreementDrafting_edtuzz.pdf",
      registernow: "",
      side: "left",
    },

    {
      id: 32,
      name: "Fire Bound",
      venue: "Room 501",
      time: "2:00 PM – 4:00 PM",
      description:
        "High-energy competitive challenge testing resilience and teamwork.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010679/firebound_zm8rsy.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/fireBound_blutec.pdf",
      registernow:
        "https://docs.google.com/forms/d/1jZL1VnzdE4p0ou1nFPwFUoE8e1mn4gij-k4xMyU0tEo",
      side: "right",
    },

    {
      id: 33,
      name: "Voice Unplugged",
      venue: "Stage",
      time: "2:30 PM – 4:00 PM",
      description: "Musical performance event celebrating raw vocal talent.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010715/voiceunplegged_ifelad.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/voiceUnplugged_db86dq.pdf",
      registernow:
        "https://docs.google.com/forms/d/1XxUfaa1o9N4hOqSe_hbkANYfhwUELu84B_voFsROUAU",
      side: "left",
    },

    {
      id: 34,
      name: "Prize Distribution",
      venue: "Stage",
      time: "4:00 PM – 5:00 PM",
      description: "Award ceremony honoring winners and participants.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771037591/360_F_1807663292_FfzBf70fyP4nnTx5wznRbyiLeNymLkes_nbvxph.jpg",
      side: "right",
    },
  ],

  2: [
    // =========================
    // 27 FEB 2026 – Dilli Haat Janakpuri
    // =========================

    {
      id: 35,
      name: "Rang Nritya",
      venue: "Stage",
      time: "10:00 AM",
      description:
        "Dance performances showcasing vibrant cultural expressions.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010716/rangnritya_kpv1c5.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/rangNritya_uwizrp.pdf",
      registernow:
        "https://docs.google.com/forms/d/14YoN4bLLKqlk7Qr5uvap22Ickd2uXJz4AImr7wpS8eU",
      side: "left",
    },

    {
      id: 36,
      name: "60 Sec Saga",
      venue: "Dilli Haat",
      time: "11:00 AM",
      description: "60-second reel competition capturing festival highlights.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010676/60secsaga_lxsyiu.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/60SecSaga_b5pxme.pdf",
      registernow:
        "https://docs.google.com/forms/d/1X3pB841oH2DPtg64fLg2BDuOliY9Dwt03FkSEx_gagI",
      side: "right",
    },

    {
      id: 37,
      name: "NATPRAN - Nukkad Natak",
      venue: "Near Tree, Dilli Haat",
      time: "11:00 AM",
      description:
        "Live street theatre performances with impactful storytelling.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010678/natparn_ujlr8x.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/natparn_lgn6sn.pdf",
      registernow:
        "https://docs.google.com/forms/d/1M3rUJv7bPz3aNcvujUgFqbQi1YxHxxm61sXwqt1PiRs",
      side: "left",
    },

    {
      id: 38,
      name: "Floor Art Fiesta - Rangoli",
      venue: "Near Stalls",
      time: "11:00 AM",
      description:
        "Creative floor art competition celebrating artistic imagination.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010738/floorartfiestarangoli_pofdoi.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/floorArtFiesta_zzuqv5.pdf",
      registernow:
        "https://docs.google.com/forms/d/1GHub3B-EQ4c_63gVua9hBc0SIpeCR--o6RZq1kB8RP8",
      side: "right",
    },

    {
      id: 39,
      name: "Miti Kala Kriti",
      venue: "Dilli Haat",
      time: "11:00 AM",
      description:
        "Clay art competition highlighting traditional craftsmanship.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010711/mitikalakriticlaymodelling_mmiflf.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/mitiKalakriti_shooe3.pdf",
      registernow:
        "https://docs.google.com/forms/d/1ZPqquC9uaXw-zgW0R8YWP2Z0R6E9EWJ2JwOx9uwqX_o",
      side: "left",
    },

    {
      id: 40,
      name: "Style Parade",
      venue: "Stage",
      time: "1:00 PM",
      description: "Fashion showcase celebrating creativity and confidence.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010676/styleparade_ppo7jc.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/styleParadise_gtpwp3.pdf",
      registernow:
        "https://docs.google.com/forms/d/1CdGbxgPvC03QT9ORxAjUj4zLqZkYO59Zmws2BJASIa0",
      side: "right",
    },

    {
      id: 41,
      name: "Color Me Up",
      venue: "Dilli Haat",
      time: "3:00 PM",
      description:
        "Interactive art-based activity spreading colors and creativity.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010739/colormeupfacepainting_berbje.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771048159/colorMeUp_btjeyw.pdf",
      registernow:
        "https://docs.google.com/forms/d/1qGtPWjiD4DlCXPzB1yOoaENUb6gMKRFV4JcS4vJ3Q78",
      side: "left",
    },

    {
      id: 42,
      name: "Band Dominion",
      venue: "Stage",
      time: "3:00 PM",
      description: "Live band performances delivering electrifying music.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771010671/banddominion_jvfqm3.png",
      rulebookUrl:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/bandDominion_lovw3r.pdf",
      registernow:
        "https://docs.google.com/forms/d/10BbAsWtlRuK9pKech2ETDj8YcGrP4UKlgWRbivEsFes",
      side: "right",
    },

    {
      id: 43,
      name: "Prize Distribution",
      venue: "Dilli Haat",
      time: "5:00 PM",
      description: "Closing ceremony celebrating winners and participants.",
      image:
        "https://res.cloudinary.com/deuzzyw0k/image/upload/v1771037591/360_F_1807663292_FfzBf70fyP4nnTx5wznRbyiLeNymLkes_nbvxph.jpg",
      side: "left",
    },
  ],
};

const EventsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get day from URL or default to 1
  const dayFromUrl = parseInt(searchParams.get("day") || "1", 10);
  const [activeDay, setActiveDay] = useState(dayFromUrl);

  const days = [
    { id: 1, label: "DAY 1" },
    { id: 2, label: "DAY 2" },
  ];

  const events = eventsData[activeDay] || [];

  // Scroll to top when activeDay changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeDay]);

  // Update URL when day changes
  const handleDayChange = (dayId) => {
    setActiveDay(dayId);
    router.push(`?day=${dayId}`, { scroll: false });
  };

  return (
    <div
      className="min-h-screen bg-[url('/assets/bookeh5.webp')] bg-no-repeat bg-cover bg-center text-white relative"
      style={{
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Header with "Events" */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-32 pb-16 text-center"
        >
          <motion.h1
            className="text-5xl font-black tracking-[0.2em] uppercase md:text-8xl pr-2 pl-7"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F59E0B, #FBBF24, #D97706, #F59E0B)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontFamily: "var(--font-ethno)",
            }}
          >
            EVENTS
          </motion.h1>
        </motion.div>

        {/* Day Selector */}
        <div className="sticky top-18 z-20 mb-8 bg-linear-to-r from-purple-950/80 via-purple-900/80 to-purple-950/80 py-8 backdrop-blur-xl border-y border-amber-500/20">
          <div className="mx-auto flex max-w-4xl items-center justify-center gap-8 lg:gap-16">
            {days.map((day) => (
              <motion.button
                key={day.id}
                onClick={() => handleDayChange(day.id)}
                className="relative flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                <motion.span
                  className={`text-base font-bold tracking-widest uppercase transition-all duration-300 lg:text-xl ${
                    activeDay === day.id
                      ? "scale-125 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                      : "text-gray-500"
                  }`}
                  animate={{
                    scale: activeDay === day.id ? 1.25 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {day.label}
                </motion.span>

                {/* Active indicator line */}
                {activeDay === day.id && (
                  <motion.div
                    layoutId="activeDay"
                    className="absolute -bottom-3 h-1 w-16 rounded-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Timeline Section - Remounts on day change */}
        <TimelineSection key={activeDay} events={events} />
      </div>
    </div>
  );
};

// Separate Timeline Component
const TimelineSection = ({ events }) => {
  const containerRef = useRef(null);
  const [items, setItems] = useState([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Track which items are in view
  useEffect(() => {
    const handleScroll = () => {
      const timelineElement = containerRef.current;
      if (!timelineElement) return;

      const timelineTop = timelineElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight / 2;
      const scrollProgress = windowHeight - timelineTop;

      const itemElements = timelineElement.querySelectorAll(".timeline-item");
      const updatedItems = Array.from(itemElements).map((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        return {
          id: events[index]?.id || index + 1,
          inView: scrollProgress > windowHeight - itemTop,
        };
      });

      setItems((prevItems) => {
        const hasChanged = updatedItems.some((item, index) => {
          return prevItems[index]?.inView !== item.inView;
        });
        return hasChanged ? updatedItems : prevItems;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [events]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto max-w-7xl px-4 py-20 lg:px-6"
    >
      {/* Mobile Timeline Line - Left side */}
      <span className="absolute top-0 left-8 h-full w-0.75 bg-gray-600/30 lg:hidden"></span>

      {/* Mobile Animated Line */}
      <motion.span
        className="absolute top-0 left-8 w-0.75 origin-top bg-linear-to-b from-amber-400 via-amber-500 to-amber-600 lg:hidden"
        style={{ height: lineHeight }}
      ></motion.span>

      {/* Desktop Timeline Line */}
      <span className="absolute top-0 left-1/2 hidden h-full w-1 -translate-x-1/2 bg-gray-600/30 lg:block"></span>

      {/* Desktop Animated Line */}
      <motion.span
        className="absolute top-0 left-1/2 hidden w-1 origin-top -translate-x-1/2 bg-linear-to-b from-amber-400 via-amber-500 to-amber-600 lg:block"
        style={{ height: lineHeight }}
      ></motion.span>

      {/* Events */}
      <div className="space-y-12 lg:space-y-32">
        {events.map((event, index) => {
          const itemInView =
            items.find((item) => item.id === event.id)?.inView || false;
          return (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              side={event.side}
              inView={itemInView}
            />
          );
        })}
      </div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ event, index, side, inView }) => {
  const ref = useRef(null);
  const router = useRouter();

  // Get rulebook URL
  const rulebookUrl = event.rulebookUrl;
  const registernow = event.registernow || "";

  return (
    <motion.div
      ref={ref}
      className="timeline-item relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      style={{ fontFamily: "var(--font-josefin)" }}
    >
      {/* MOBILE LAYOUT (< 1024px) */}
      <div className="flex items-start gap-4 pl-16 lg:hidden">
        {/* Left Timeline Dot */}
        <div className="absolute top-40 left-4 z-10 flex -translate-x-1/2 items-center justify-center">
          <motion.div
            className={`relative flex items-center justify-center rounded-full transition-all duration-400 ease-in-out ${
              inView
                ? "h-8 w-8 bg-linear-to-r from-amber-400 to-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.9)]"
                : "h-8 w-8 bg-linear-to-r from-amber-400 to-amber-600 opacity-40"
            }`}
            animate={{
              scale: inView ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: inView ? 2 : 0.3,
              repeat: inView ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            <div className="h-4 w-4 rounded-full bg-white" />
          </motion.div>
        </div>

        {/* Right Side - Clickable Card */}
        <motion.div
          onClick={() => router.push("/register")}
          className="flex flex-1 flex-col gap-4 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group relative w-full"
          >
            <div className="relative h-88 w-full overflow-hidden rounded-2xl border-2 border-amber-400/30 bg-linear-to-br from-amber-500/20 to-amber-600/20 p-2 shadow-[0_0_25px_rgba(245,158,11,0.3)]">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority={index < 2}
                />
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm hover:border-amber-400/40 hover:bg-black/60 transition-all duration-300">
            <h3 className="mb-2 text-lg font-bold text-white">{event.name}</h3>

            <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="h-4 w-4 text-amber-400" />
              <span className="font-semibold">Venue:</span>
              <span>{event.venue}</span>
            </div>

            <div className="mb-2 flex items-center gap-2 text-sm text-amber-400">
              <span className="font-semibold">Time:</span>
              <span>{event.time}</span>
            </div>

            <p className="text-sm leading-relaxed text-gray-500 mb-4">
              {event.description}
            </p>

            {/* Rulebook View Button */}
            {rulebookUrl?.trim() ? (
              <motion.a
                href={rulebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-bold px-4 py-2 rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all w-full mb-2"
              >
                <ExternalLink className="w-4 h-4" />
                View Rulebook
              </motion.a>
            ) : null}

            {/* Register Button */}
            {registernow?.trim() ? (
              <motion.a
                href={registernow}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-bold px-4 py-2 rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all w-full"
              >
                <ExternalLink className="w-4 h-4" />
                Register Now
              </motion.a>
            ) : null}
          </div>
        </motion.div>
      </div>

      {/* DESKTOP LAYOUT (>= 1024px) */}
      <div className="hidden items-center lg:flex">
        {side === "left" ? (
          <>
            {/* Left Side: Image FIRST, then Details */}
            <div className="flex w-5/12 items-center justify-end gap-6 ">
              {/* Image - LARGER SIZE */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="group relative shrink-0"
              >
                <div className="relative h-76 w-60 overflow-hidden rounded-2xl border-2 border-amber-400/30 bg-linear-to-br from-amber-500/20 to-amber-600/20 p-2 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Details - SMALLER */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.2 }}
                className="flex-1"
              >
                <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-black/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {event.name}
                  </h3>

                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4 text-amber-400" />
                    <span className="font-semibold">Venue:</span>
                    <span>{event.venue}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-500 mb-4">
                    {event.description}
                  </p>

                  {/* Rulebook View Button */}
                  {rulebookUrl?.trim() ? (
                    <motion.a
                      href={rulebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-bold px-4 py-2 rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all w-full mb-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Rulebook
                    </motion.a>
                  ) : null}

                  {/* Register Button */}
                  {registernow?.trim() ? (
                    <motion.a
                      href={registernow}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-bold px-4 py-2 rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all w-full"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Register Now
                    </motion.a>
                  ) : null}
                </div>
              </motion.div>
            </div>

            {/* Center: Timeline Dot */}
            <div className="relative z-10 flex w-2/12 flex-col items-center">
              <motion.div
                className={`relative flex items-center justify-center rounded-full transition-all duration-400 ease-in-out ${
                  inView
                    ? "h-10 w-10 bg-linear-to-r from-amber-400 to-amber-600 shadow-[0_0_25px_rgba(245,158,11,0.9)]"
                    : "h-10 w-10 bg-linear-to-r from-amber-400 to-amber-600 opacity-40"
                }`}
                animate={{
                  scale: inView ? [1, 1.1, 1] : 1,
                  boxShadow: inView
                    ? [
                        "0 0 25px rgba(245,158,11,0.9)",
                        "0 0 45px rgba(251,191,36,0.9)",
                        "0 0 25px rgba(245,158,11,0.9)",
                      ]
                    : "0 0 0px rgba(245,158,11,0)",
                }}
                transition={{
                  duration: inView ? 2 : 0.3,
                  repeat: inView ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <div className="h-5 w-5 rounded-full bg-white" />
              </motion.div>
            </div>

            {/* Right Side: Time Badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.2 }}
              className="flex w-5/12 justify-start pl-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-amber-400/30 bg-black/90 px-6 py-2.5 text-lg font-bold text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] backdrop-blur-sm"
              >
                {event.time}
              </motion.div>
            </motion.div>
          </>
        ) : (
          <>
            {/* Left Side: Time Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 }}
              className="flex w-5/12 justify-end pr-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-amber-400/30 bg-black/90 px-6 py-2.5 text-lg font-bold text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] backdrop-blur-sm"
              >
                {event.time}
              </motion.div>
            </motion.div>

            {/* Center: Timeline Dot */}
            <div className="relative z-10 flex w-2/12 flex-col items-center">
              <motion.div
                className={`relative flex items-center justify-center rounded-full transition-all duration-400 ease-in-out ${
                  inView
                    ? "h-10 w-10 bg-linear-to-r from-amber-400 to-amber-600 shadow-[0_0_25px_rgba(245,158,11,0.9)]"
                    : "h-10 w-10 bg-linear-to-r from-amber-400 to-amber-600 opacity-40"
                }`}
                animate={{
                  scale: inView ? [1, 1.1, 1] : 1,
                  boxShadow: inView
                    ? [
                        "0 0 25px rgba(245,158,11,0.9)",
                        "0 0 45px rgba(251,191,36,0.9)",
                        "0 0 25px rgba(245,158,11,0.9)",
                      ]
                    : "0 0 0px rgba(245,158,11,0)",
                }}
                transition={{
                  duration: inView ? 2 : 0.3,
                  repeat: inView ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <div className="h-5 w-5 rounded-full bg-white" />
              </motion.div>
            </div>

            {/* Right Side: Details FIRST, then Image */}
            <div className="flex w-5/12 items-center justify-start gap-6">
              {/* Details - SMALLER */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.2 }}
                className="flex-1"
              >
                <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-black/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {event.name}
                  </h3>

                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4 text-amber-400" />
                    <span className="font-semibold">Venue:</span>
                    <span>{event.venue}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-500 mb-4">
                    {event.description}
                  </p>

                  {/* Rulebook View Button */}
                  {rulebookUrl?.trim() ? (
                    <motion.a
                      href={rulebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-bold px-4 py-2 rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all w-full mb-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Rulebook
                    </motion.a>
                  ) : null}

                  {/* Register Button */}
                  {registernow?.trim() ? (
                    <motion.a
                      href={registernow}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-bold px-4 py-2 rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all w-full"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Register Now
                    </motion.a>
                  ) : null}
                </div>
              </motion.div>

              {/* Image - LARGER SIZE */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="group relative shrink-0"
              >
                <div className="relative h-76 w-60 overflow-hidden rounded-2xl border-2 border-amber-400/30 bg-linear-to-br from-amber-500/20 to-amber-600/20 p-2 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default EventsPage;
